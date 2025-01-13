import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TodosApiService } from '../todos-api.service';
import { inject } from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

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
      (response: any) => {
        this.todos = response;
      }
    )
  }

  deleteTodo(id: any) {
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


