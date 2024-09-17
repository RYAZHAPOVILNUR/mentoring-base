import { Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { Todo } from "./todo-interface";
import { NgFor } from '@angular/common';
import { TodoCardComponent } from './todo-card/todo-card.component';

@Component({
  selector: 'app-todos-list.component',
  standalone: true,
  imports: [NgFor, TodoCardComponent],
  templateUrl: './todos-list.component.component.html',
  styleUrl: './todos-list.component.component.scss'
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService)

  todos: Todo[] = [];

  constructor() {
    this.todosApiService.getTodos().subscribe(
      (response: any) => {
        this.todos = response;
      }
    )
  }

  deleteTodo(id: any) {
    this.todos = this.todos.filter(
      todo => {
        if (id === todo.id) {
          return false;
        } else {
          return true;
        }
      }
    )
  }
}
