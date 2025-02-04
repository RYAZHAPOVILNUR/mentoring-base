import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodosApiService } from "../todos-api.service";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { TodosService } from "../todos.service";
import { CreateTodoForm } from "../create-todo-form/create-todo-form.component";


@Component({
    selector: 'app-todos-list',
    standalone: true,
    imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodoForm],
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodosListComponent {
    readonly todosApiService = inject(TodosApiService);
    readonly todosService = inject(TodosService)

    constructor() {
        this.todosApiService.getTodos().subscribe(
            (response: any) => {
                this.todosService.setTodo(response)
            }
        )
    }

    deleteTodo(id: number) {
        this.todosService.deleteTodo(id);
    }

    public createTodo(formDate: any): void {
        this.todosService.createTodo({
            id: new Date().getTime(),
            userId: formDate.userId,
            title: formDate.title,
            completed: formDate.completed
        })
    }
}