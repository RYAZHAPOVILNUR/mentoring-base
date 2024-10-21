import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodosApiService } from "../todos-api.service";
import { AsyncPipe, NgFor } from "@angular/common";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { TodosService } from "../todo.service";



export interface ITodo {
    'userId': number,
    'id': number,
    'title': string,
    'completed': boolean
}

@Component({
    selector: 'app-todos-list',
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    standalone: true,
    imports: [TodoListComponent, TodoCardComponent, NgFor, AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})


export class TodoListComponent {
    readonly todosApiService = inject(TodosApiService)
    readonly todosService = inject(TodosService)

    constructor() {
        this.todosApiService.getTodos().subscribe(
            (response: any) => {
                this.todosService.setTodos(response)
            }
        )
    }

    deleteTodo(id: number) {
        this.todosService.deleteTodos(id)
    }
}

