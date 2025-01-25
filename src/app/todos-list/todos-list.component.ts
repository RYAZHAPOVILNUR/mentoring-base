import { Component, inject } from "@angular/core";
import { TodosApiService } from "../todos-api.service";


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
    standalone: true
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

    

}