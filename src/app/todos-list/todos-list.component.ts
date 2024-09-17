import { NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import { TodosApiService } from "../todos-api.service";
import { TodosCardComponent } from "./todos-card/todos-card.component";

export interface Todo {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}

@Component ({
selector: 'app-todos-list',
templateUrl: './todos-list.component.html',
styleUrl: './todos-list.component.scss',
standalone: true,
imports: [NgFor, TodosCardComponent],
})

export class TodosListComponent {
  readonly todosApiService = inject (TodosApiService);
  todos: Todo[] = [];

  constructor () {
    this.todosApiService.getTodos().subscribe(
        (Response:any) => {this.todos=Response;
      }
    )
  }

  DeleteTodo(id:any) {
      this.todos=this.todos.filter (
      todo => {
        if (id === todo.id) {
          return false
        } else {
          return true;
        }
      }
    )
  }
}