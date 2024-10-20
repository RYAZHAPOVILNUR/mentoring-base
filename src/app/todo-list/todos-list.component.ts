import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodosApiService } from "../todos-api.servise";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { TodosService } from "../todos.service";
import { ITodo } from "../Interfaces/todo.interface";

@Component({
    selector: 'app-todos-list',
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    standalone: true,
    imports: [NgFor, TodoCardComponent, AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodosListComponent {
    readonly todosApiService = inject(TodosApiService);
    readonly todosService = inject(TodosService);

    constructor() {

        this.todosApiService.getTodos().subscribe(
            (response: ITodo[]) => {
                this.todosService.setTodos(response)
            }
        )
    }
    deleteTodo(id: number) {
        this.todosService.deleteTodo(id);
    }
}

