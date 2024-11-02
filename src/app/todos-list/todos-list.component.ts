import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodoCardComponent } from "./todos-card/todo-card.component";
import { TodosApiService } from "../todos-api.service";
import { HttpClient } from "@angular/common/http";
import { TodosService } from "../todo.service";
import { CreateTodoFormComponent } from "../create-todo-form/create-todo-form.component";




export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

 @Component({
   selector: 'app-todos-list',
   templateUrl: './todos-list.component.html',
   styleUrl: './todos-list.component.scss',
   standalone: true,
   imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodoFormComponent],
   changeDetection: ChangeDetectionStrategy.OnPush
 })
 export class TodosListComponent {
    readonly todosApiService = inject(TodosApiService)
    readonly todosService = inject(TodosService)
    todos$ = this.todosService.todos$

    constructor() {
        this.todosApiService.getTodos().subscribe(
            (Responce: any) => {
                this.todosService.setTodo(Responce);
                this.todos$ = this.todosService.todos$
            }
        )
    }
    deleteTodo(id: number) {
        this.todosService.deleteTodo(id)
        this.todos$ = this.todosService.todos$
    }
    public createTodo(formData: any) {
        this.todosService.creatTodo({
            id: new Date().getTime(),
            userId: formData.userId,
            title: formData.title,
            completed: formData.completed
        })
    }
 }
