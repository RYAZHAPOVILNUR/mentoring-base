import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosApiService } from './todos-api.service';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  comleted: boolean;
}
@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [NgFor, TodoCardComponent],
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  todos: Todo[] = [];
  constructor() {
    this.todosApiService.getTodos().subscribe((response: any) => {
      this.todos = response;
    });
  }

  deleteTodo(id: any) {
    this.todos = this.todos.filter((todo) => {
      if (id === todo.id) {
        return false;
      } else {
        return true;
      }
    });
  }
}
