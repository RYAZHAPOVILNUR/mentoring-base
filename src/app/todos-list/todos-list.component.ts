import {Component, inject} from '@angular/core';
import {TodoCardComponent} from "./todo-card/todo-card.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {Observable} from "rxjs";
import {CreateTodoFormComponent} from "../create-todo-form/create-todo-form.component";
import {Todo} from "../interfaces/todo.interface";
import {TodosApiService} from "../api-services/todos-api.service";
import {TodosListService} from "./todos-list.service";

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [
    TodoCardComponent,
    NgForOf,
    AsyncPipe,
    CreateTodoFormComponent
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {
  todoListService = inject(TodosListService)
  todos$: Observable<Todo[]> = this.todoListService.todos$;
  todosApi = inject(TodosApiService)

  constructor() {
    this.todosApi.getTodos().subscribe(todos => this.todoListService.setTodos(todos))
  }

  deleteTodo(id: number) {
    this.todoListService.deleteTodo(id)
  }

  createTodo(todo: Todo) {
    this.todoListService.createTodo(todo)
  }
}
