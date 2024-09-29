import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { RouterLink } from '@angular/router';
import { TodosApiService } from '../todos-api.service';
import { TodoService } from '../todos.service';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';

@Component({
  selector: 'api-todos-list',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    TodoCardComponent,
    AsyncPipe,
    CreateTodoFormComponent,
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodoService);

  constructor() {
    this.todosApiService.getTodos().subscribe((response: any) => {
      this.todosService.setTodos(response);
    });
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
  }

  public createTodo(formData: any) {
    this.todosService.createTodo({
      id: new Date().getTime(),
      userId: formData.userId,
      title: formData.title,
      completed: formData.completed,
    });
  }
}