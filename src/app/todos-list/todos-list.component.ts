import { NgFor } from "@angular/common";
import { Component, inject, Injectable } from "@angular/core";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { TodosApiService } from "../todos-api.service";
import { Todo } from "./todos-interface";

@Injectable()

@Component ({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [NgFor, TodoCardComponent]
})

export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
    todos: Todo[] = [];

    constructor() {
        this.todosApiService.getTodos().subscribe(
        (response: Todo[]) => {
          this.todos = response;
          console.log('ToDo:', this.todos);
        }
      )
    }
    deleteTodo(id: number) {
      this.todos = this.todos.filter(
        todos => {
          return id === todos.id ? false : true;
        }
      )
    }
}
