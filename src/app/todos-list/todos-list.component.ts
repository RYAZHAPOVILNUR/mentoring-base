import {Component, Inject, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodosApiService} from "../todos-api.service";
import {TodoCardComponent} from "./todo-card/todo-card.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {Observable} from "rxjs";

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}
@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [
    TodoCardComponent,
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {
  todoApi = inject(TodosApiService)

  todos: Observable<Todo[]>;

  constructor() {
   this.todos =  this.todoApi.todos$
    // this.todos =  this.todoApi.getTodos()
    // this.todoApi.todos$.subscribe(todos => this.todos = todos)
  }
    deleteTodo(id: number) {
      this.todoApi.deleteTodo(id)
    }
}
