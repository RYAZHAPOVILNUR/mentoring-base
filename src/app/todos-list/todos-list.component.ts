import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodoCardComponent } from "./todos-card/todo-card.component";
import { TodosApiService } from "../todos-api.service";
import { HttpClient } from "@angular/common/http";
import { TodosService } from "../todo.service";



export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

 @Component({
   selector: 'app-users-list',
   templateUrl: './todos-list.component.html',
   styleUrl: './todos-list.component.scss',
   standalone: true,
   imports: [NgFor, TodoCardComponent, AsyncPipe],
   changeDetection: ChangeDetectionStrategy.OnPush
 })
 export class TodosListComponent {
    readonly todosApiService = inject(TodosApiService)
    readonly todosService = inject(TodosService)
    todos = this.todosService.todos$

    constructor() {
        this.todosApiService.getTodos().subscribe(
            (responce: any) => {
                this.todosService.setTodo(responce);
                this.todos = this.todosService.todos$
            }
        )
    }
    deleteTodo(id: number) {
        this.todosService.deleteTodo(id)
        this.todos = this.todosService.todos$
    }
 }
