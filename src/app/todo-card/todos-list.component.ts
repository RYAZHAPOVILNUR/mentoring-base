import { Component, inject } from "@angular/core";
import { TodoApiService } from "../todos-api.service";
import { TodoCardComponent } from "./todo-card.component";
import { NgFor } from "@angular/common";

export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

@Component({
    selector: 'app-todos-list',
    standalone: true,
    imports: [TodoCardComponent, NgFor],
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss'
})
export class TodosListComponent {
    readonly todosApiService = inject(TodoApiService)
    todos: Todo[] = []

    constructor() {
        this.todosApiService.getTodos().subscribe(
            (response: Todo[]) => {
                this.todos = response;
            }
        )
    }

    deleteTodo(id: number){
        this.todos = this.todos.filter(
            todo => {
                if (id === todo.id){
                    return false
                } else {
                    return true;
                }
            }
        )
    }
}