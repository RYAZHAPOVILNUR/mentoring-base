import { ChangeDetectionStrategy, Component, inject, Injectable } from "@angular/core";
import { TodoApiService } from "../todos-api.service";
import { TodosCardComponent } from "./todo-card.component";
import { AsyncPipe, NgFor } from "@angular/common";
import { Todo,} from "./todos-interface";
import { TodosService } from "../todos.service";

@Component({
    selector: 'app-todos-list',
    standalone: true,
    imports: [TodosCardComponent, NgFor, AsyncPipe],
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent {
    readonly todosApiService = inject(TodoApiService)
    readonly todosService = inject(TodosService)

    constructor() {
        this.todosApiService.getTodos().subscribe(
            (response: Todo[]) => {
                this.todosService.setTodos(response)
            }
        )
    }

    deleteTodo(id: number){
        this.todosService.deleteTodo(id)
    }
}