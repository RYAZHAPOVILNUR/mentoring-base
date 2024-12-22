import { Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { NgFor } from '@angular/common';
import { Todo } from './todos-interface';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [TodoCardComponent, NgFor]
})

export class TodosListComponent {
   readonly todosApiService = inject(TodosApiService);
    todos: Todo[] = [];

    constructor() {
      this.todosApiService.getTodos().subscribe(
        (response: Todo[]) => {
          this.todos = response;
          console.log('TODOS:', this.todos);
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

