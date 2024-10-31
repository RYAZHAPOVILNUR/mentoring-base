import {Component, Inject, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodosApiService} from "../todos-api.service";
import {TodoCardComponent} from "./todo-card/todo-card.component";
import {NgForOf} from "@angular/common";

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
    NgForOf
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {
  todoApi = inject(TodosApiService)

  todos: Todo[] = []

  constructor() {
    this.todoApi.getTodos().subscribe(res => {
      this.todos = res;
    })
  }
    deleteTodo(id: number) {
      this.todos = this.todos.filter(el => el.id !== id)
    }
}
