import { Component, inject } from "@angular/core";
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { TodosApiService } from "../todos-api.service";
import { NgFor } from "@angular/common";

export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

@Component ({
    selector: 'app-todos-list',
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    standalone: true,
    imports: [TodosCardComponent, NgFor],
})
export class TodosListComponent {
    readonly todosApiService = inject(TodosApiService);

    todos: Todo[]= [];

    constructor() {
        this.todosApiService.getTodos().subscribe(
            (responce: any) => {
                this.todos = responce;
            }
        )
    }

    deleteTodo(id: number) {
        this.todos = this.todos.filter(
            todo => {
                if (id === todo.id) {
                    return false
                } else {
                    return true
                }
            }
        )
    }
}