import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosService } from '../todos.service';
import { createTodoFormComponent } from '../create-todos-form/create-todo-form';
import { Todos } from '../interfaces/todos.interface';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe, createTodoFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodosService);

  constructor() {
    this.todosApiService
      .getTodos()
      .subscribe((responce: Todos[]) => this.todosService.setTodos(responce));
  }

  deleteTodos(id: number) {
    this.todosService.deleteTodos(id);
  }

  createTodo(dataFormTodo: Todos) {
    this.todosService.createTodo({
      userId: dataFormTodo.id,
      id: new Date().getTime(),
      title: dataFormTodo.title,
      completed: dataFormTodo.completed,
    });
  }
}
export { Todos };
