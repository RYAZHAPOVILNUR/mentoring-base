import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosCardComponent } from './todos-card/todos-card.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodosApiService } from '../todos-api.service';
import { Todo } from '../interfaces/todo.interface';
import { TodosService } from '../todos.service';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodosCardComponent, NgFor, AsyncPipe, CreateTodoFormComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodosService);

  constructor() {
    this.todosApiService.getTodos().subscribe((todos) => {
      this.todosService.setTodos(todos);
    });
  }

  createTodo(formData: Todo) {
    this.todosService.createTodo({
      userId: formData.userId,
      id: new Date().getTime(),
      title: formData.title,
      completed: formData.completed,
    });
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
  }
}
