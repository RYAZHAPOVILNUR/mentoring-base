import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TodosApiService } from '../todos-api.service';
import { inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { Todo } from './todo-create';

@Component ({
  selector: 'app-user-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [NgFor, TodoCardComponent]
})

export class TodoListComponent {
  readonly todosApiService = inject(TodosApiService)
  todos: Todo[] = [];

  constructor () {
    this.todosApiService.getTodos().subscribe(
      (response: Todo[]) => {
        this.todos = response;
      }
    )
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(
      todo => {
        if (id === todo.id) {
          return false
        } else {
          return true
        }
      }
    )
  }
}
