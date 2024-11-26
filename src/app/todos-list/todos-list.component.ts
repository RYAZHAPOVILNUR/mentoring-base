import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { Todo } from './todos-list.interface';
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { CommonModule, NgFor } from '@angular/common';
import { TodosService } from '../todos.service';
import { CreateTodosFormComponent } from '../create-todos-form/create-todos-form.component';


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
    this.todosService.createTodos({
      id: new Date().getTime(),
      userId: formData.userId,
      title: formData.title,
      completed: formData.completed,
    });
    console.log('Дынные формы: ', event);
    console.log(new Date().getTime());
  }
}
