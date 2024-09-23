import { Component, inject } from '@angular/core';
import { ITodo } from './todo.interface';
import { TodosApiService } from '../todos-api.service';
import { NgFor } from '@angular/common';
import { TodosCardComponent } from './todos-card/todos-card.component';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [NgFor, TodosCardComponent],
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);

  todos: ITodo[] = [];

  constructor() {
    this.todosApiService
      .getTodosList()
      .subscribe((response) => (this.todos = response));
  }

  deleteTodos(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
