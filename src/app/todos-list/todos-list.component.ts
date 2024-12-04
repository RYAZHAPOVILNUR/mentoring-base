import { Component, inject } from "@angular/core";
import { TodosApiService } from "../todos-api.service";
import { NgFor } from "@angular/common";
import { TodoCardComponent } from "./todos-card/todo-card.component";

export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


@Component({
    selector: 'todos-list',
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    standalone: true,
    imports: [NgFor, TodoCardComponent]
})

export class TodosListComponent {
    readonly todosApiService = inject(TodosApiService);
    todos: Todo[] = [];


    deleteTodo(id: number) {
        this.todos = this.todos.filter(
            item => item.id !== id
        )
    }
    
    
    constructor() {
        this.todosApiService.getTodos().subscribe(
            (response: any) => {
                this.todos = response
                console.log(this.todos)
            }
        )
    }
}