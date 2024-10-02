import { Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { NgFor } from '@angular/common';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  standalone: true,
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  imports: [TodoCardComponent, NgFor],
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  todos: Todo[] = [];

  constructor() {
    this.todosApiService
      .getTodos()
      .subscribe((res: any) => (this.todos = res.slice(0, 10)));
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
