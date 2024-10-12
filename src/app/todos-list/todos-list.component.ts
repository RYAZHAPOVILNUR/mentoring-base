import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodosService } from '../todos.service';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';

export interface Todo {
  userId: number | string;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoFormData {
  taskName: string;
  author: string;
}

@Component({
  standalone: true,
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  imports: [TodoCardComponent, NgFor, AsyncPipe, CreateTodoFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodosService);

  constructor() {
    this.todosApiService
      .getTodos()
      .subscribe((res: any) => this.todosService.setTodos(res.slice(0, 10)));
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
  }

  createNewTodo(formData: TodoFormData) {
    this.todosService.createTodo({
      id: new Date().getDate(),
      userId: formData.author,
      title: formData.taskName,
      completed: false,
    });
  }
}
