import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../servises/todos-api.servise';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosService } from '../servises/todos.service';
import { ITodo } from '../Interfaces/todo.interface';
import { TodoAddButtonComponent } from './todo-add-button/todo-add-button.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [
    NgFor,
    TodoCardComponent,
    AsyncPipe,
    MatDialogModule,
    TodoAddButtonComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodosService);
  readonly dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  constructor() {
    this.todosApiService.getTodos().subscribe((response: ITodo[]) => {
      this.todosService.setTodos(response);
    });
  }
  public deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
  }

  public createTodo(todo: ITodo) {
    this.todosService.todos$
      .pipe(
        take(1),
        map((todos) =>
          todos.find((existingTodo) => existingTodo.title === todo.title)
        )
      )
      .subscribe((existingTodo) => {
        if (existingTodo !== undefined) {
          this.snackBar.open('Такая задача уже существует', 'ok', {
            duration: 3000,
          });
        } else {
          this.todosService.createTodo({
            id: new Date().getTime(),
            userId: todo.userId,
            title: todo.title,
            completed: todo.completed,
          });
          this.snackBar.open('Новая задача создана', 'ok', {
            duration: 3000,
          });
        }
      });
  }

  public editTodo(formDialogValue: ITodo) {
    this.todosService.editTodo(formDialogValue);
  }
}
