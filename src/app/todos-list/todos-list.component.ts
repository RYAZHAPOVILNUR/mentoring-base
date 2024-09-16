import { NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { RouterLink } from "@angular/router";
import { Todo } from "./todo-interface";
import { TodosApiService } from "../todos-api.service";

@Component({
  selector: 'api-users-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [NgFor, RouterLink, TodoCardComponent]
})
export class TodoListComponent {
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
      todo => todo.id !==id
    )
  }

}