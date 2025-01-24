import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { TodosApiService } from "../todos-api.service";
import { TodoCardComponent } from "./todo-card/todo-card.component";

export interface Todo {
    userId: number;
    id: number;
    title: string;
    comleted: boolean;
  }

@Component({
    selector: 'app-todos-list',
    standalone: true,
    imports: [NgFor, TodoCardComponent],
    templateUrl: './todos-list.component.html',
    styleUrls: ['./todos-list.component.scss']
})


export class TodosListComponent{
  readonly todosApiServise = inject(TodosApiService);
    todos: Todo[] =[];

    constructor() {
        this.todosApiServise.getTodos().subscribe(
          (response: Todo[]) => {
                this.todos = response;
            });
    }

    deleteTodo(id: number) {
        this.todos = this.todos.filter(
            todo => {
                return id === todo.id ? false : true;
            }
        )
    }
}