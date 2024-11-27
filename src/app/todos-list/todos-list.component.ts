import { AsyncPipe, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Injectable,
} from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosApiService } from './todos-api.service';
import { TodosService } from './todo-card/todos.service';
import { CreateTodoFormComponent } from '../components/create-todo-form/create-todo-form.component';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodoFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  todo: any;
  createTodos($event: Event) {
    throw new Error('Method not implemented.');
  }
  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodosService);

  constructor() {
    this.todosApiService.getTodos().subscribe((response: any) => {
      this.todosService.setTodos(response.slice(0, 10));
      console.log(response);
    });
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
  }
  createTodo(todo: Todo) {
    this.todosService.createTodo(todo);
  }
}
