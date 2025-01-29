import { NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import { TodosApiService } from "../todos-api.service";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { AsyncPipe } from "@angular/common";
import { TodosService } from "../todos.service";
import { ChangeDetectionStrategy } from "@angular/core";
import { CreateTodoFormComponent } from "../create-todo-form/create-todo-form.component";

export interface Todo {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean,
}

@Component({
    selector: 'app-todos-list',
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodoFormComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodosListComponent {
    readonly todosApiService = inject(TodosApiService)
    readonly todosService = inject(TodosService)


    constructor() {
        this.todosApiService.getTodos().subscribe(
          (response: any) => {
              this.todosService.setTodos(response);
          }
      )
    }

    deleteTodo(id: number) {
        this.todosService.deleteTodo(id);
    }

    public createTodo(formData: any) {
      this.todosService.createTodo({
        id: new Date().getTime(),
        title: formData.title,
        userId: formData.userId,
        completed: formData.completed,
      });
    }

    getTodosAuthor(id: number) {
    }
}

