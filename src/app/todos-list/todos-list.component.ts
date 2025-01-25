import { Component, inject } from "@angular/core";
import { TodosApiService } from "../todos-api.service";
import { NgFor } from "@angular/common";
import { TodoCard } from "./todo-card/todo-card.component";


export interface Todos {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

@Component({
    selector: 'app-todos-list',
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    standalone: true,
    imports: [NgFor, TodoCard]
})

export class TodosListComponent {
    readonly apiService = inject(TodosApiService)

    todos: Todos[] = []

    constructor(){
        this.apiService.getTodos().subscribe(
            (response: any) => {
                this.todos = response
                console.log('TODOS:', this.todos)
            }
        )
    }

    deleteTodo(id: number){
        this.todos = this.todos.filter(
            item => id === item.id ? false : true
        )
    }

    

}