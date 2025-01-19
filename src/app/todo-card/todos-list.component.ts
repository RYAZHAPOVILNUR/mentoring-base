import { Component, inject, Injectable } from "@angular/core";
import { TodoApiService } from "../todos-api.service";
import { TodosCardComponent } from "./todo-card.component";
import { NgFor } from "@angular/common";
import { Todo,} from "./todos-interface";

@Component({
    selector: 'app-todos-list',
    standalone: true,
    imports: [TodosCardComponent, NgFor],
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
            todo => todo.id !== id
        )
    }
}