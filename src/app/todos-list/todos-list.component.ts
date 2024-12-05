import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { Todo } from './todos-list.interface';
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { CommonModule, NgFor } from '@angular/common';
import { TodosService } from '../todos.service';
import { CreateTodosFormComponent } from '../create-todos-form/create-todos-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable, take } from 'rxjs';


@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodosCardComponent, NgFor, CommonModule, CreateTodosFormComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent {

  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodosService)
  private snackBar = inject(MatSnackBar);

  @Input()
  todos$!: Observable<Todo[]>;

  constructor() {
    this.todosApiService.getTodos().subscribe(
        (response: Todo[]) => {
          this.todosService.setTodos(response);
          console.log('Todos', this.todosService);
      });
    
  }deleteTodos(id: number) {
    this.todosService.deletedTodos(id);
  }
  
  public createTodos(formData: Todo) {
    this.todosService.todos$
      .pipe(
        take(1),
        map((todos) =>
          todos.find((currentElement) => currentElement.title === formData.title)
        )
      )
      .subscribe((existingTodo) => {
        if (existingTodo !== undefined) {
          this.snackBar.open('Задача с таким тексто уже существует', 'Закрыть', {
            duration: 3000,
          });
        } else {
          this.todosService.createTodos({
            id: new Date().getTime(),
            userId: formData.userId,
            title: formData.title,
            completed: formData.completed,
          });
          this.snackBar.open('НОВАЯ ЗАДАЧА ДОБАВЛЕНА', 'Закрыть', {
            duration: 3000,
          });
        }
      });
    }
  }
