import { NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import {  TodoCardComponent } from "./todo-card/todo-card.component";
import { TodosApiService } from "../../todos-api.service";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
  standalone: true,
  imports: [NgFor, TodoCardComponent],
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService)
  todos: Todo[] = [];

  constructor() {
    this.todosApiService.getTodos().subscribe((response: any) => {
      this.todos = response;
    });
  }

  deleteTodo(id: any) {
    this.todos = this.todos.filter(
        todo => {
      if (id === todo.id) {
        return false;
      } else {
        return true;
      }
    });
  }
}
