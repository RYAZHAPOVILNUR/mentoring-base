import { NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import { TodosApiService } from "../todo-api.service";
import { TodoCardComponent } from "./todo-card/todo-card.component";


export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

@Component({
    selector: 'todo-list-root',
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.scss',
    standalone: true,
    imports: [NgFor, TodoCardComponent]
})

export class TodoListComponent {
    readonly todosApiService = inject(TodosApiService)
    todos: Todo[] = []

    constructor() {
        this.todosApiService.getTodos().subscribe((res: any) => {
            this.todos = res
        })
    }

    deleteTodo(id: number) {
        this.todos = this.todos.filter((todo) => todo.id !== id)
    }





}