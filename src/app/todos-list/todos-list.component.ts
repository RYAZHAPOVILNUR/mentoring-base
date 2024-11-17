import {Component, inject} from '@angular/core';
import {TodoCardComponent} from "./todo-card/todo-card.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {Observable} from "rxjs";
import {CreateTodoDialogComponent} from "./create-todo-dialog/create-todo-dialog.component";
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
    CreateTodoDialogComponent
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {
  private todosApi = inject(TodosApiService)
  private todoListService = inject(TodosListService)
  public todos$: Observable<Todo[]> = this.todoListService.todos$;

  constructor() {
    this.todosApi.getTodos().subscribe(todos => this.todoListService.setTodos(todos))
  }

  public deleteTodo(id: number) {
    this.todoListService.deleteTodo(id)
  }

  public createTodo(todo: Todo) {
    this.todoListService.createTodo(todo)
  }
}
