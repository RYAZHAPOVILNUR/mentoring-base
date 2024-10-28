import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from "../todos-api.service";
import { AsyncPipe, NgForOf } from "@angular/common";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { TodosService } from "../todos.service";
import { CreateTodoFormComponent } from "../create-todo-form/create-todo-form.component";

export interface  Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export interface CreateTodo {
  id: number,
  title: string,
  userId: number,
  completed: boolean,
}
@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [
    NgForOf,
    TodoCardComponent,
    AsyncPipe,
    CreateTodoFormComponent
  ],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService)
  readonly todosService = inject(TodosService)

  constructor() {
    this.todosApiService.getTodos().subscribe(
      (response: any) => {
        this.todosService.setTodos(response)
      }
    )

  }

  deleteTodo(id:number) {
    this.todosService.deleteTodo(id);
  }

  public createTodo(formTodo: CreateTodo) {
    this.todosService.createTodo({
      id: new Date().getTime(),
      title: formTodo.title,
      userId: formTodo.userId,
      completed: formTodo.completed
    })
  }
}
