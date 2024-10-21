import { Component, inject } from "@angular/core";
import { TodosApiService } from "../todos-api.service";
import { NgFor } from "@angular/common";
import { TodoCardComponent } from "./todo-card/todo-card.component";



export interface ITodo {
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
    imports: [TodoListComponent, TodoCardComponent, NgFor]
})

export class TodoListComponent {
    readonly todosApiService = inject(TodosApiService)
    todos: ITodo[] = []

    constructor() {
        this.todosApiService.getTodos().subscribe(
            (response: any) => {
                this.todos = response
            }
        )
    }

    deleteTodo(id: number) {
        this.todos = this.todos.filter(
            item => {
                if (id === item.id) {
                    return false
                } else {
                    return true
                }
            }
        )
    }
}

