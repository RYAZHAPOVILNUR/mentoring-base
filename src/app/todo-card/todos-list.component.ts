import { Component, inject } from "@angular/core";
import { NgFor } from "@angular/common";
import { TodosApiService } from "../todos-api.service";
import { TodosInterface } from "../todos-interface";
import { TodoCardComponent } from "./todo-card/todo-card.component";

@Component({
    selector: 'app-todos-list',
    standalone: true,
    imports: [NgFor,TodoCardComponent],
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss'
})

export class TodosListComponent {
    readonly todosApiService = inject(TodosApiService);
    todos: TodosInterface[] = []

    constructor() {
        this.todosApiService.getTodos().subscribe(
            (response: any) => {
                this.todos = response;
            }
        )
    }

    deleteTodo(id: number) {
        this.todos = this.todos.filter(
            item => item.id !== id
        )
    }
}