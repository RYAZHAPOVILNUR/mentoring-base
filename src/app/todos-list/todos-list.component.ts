import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { TodosApiService } from "../todos-api.service";
import { AsyncPipe, NgFor } from "@angular/common";
import { TodosService } from "../todo.service";
import { CreateTodoForm } from "../create-todo-form/create-todo-form.component";
import { Todo } from "../todo-interface";

@Component ({
    selector: 'app-todos-list',
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    standalone: true,
    imports: [TodosCardComponent, NgFor, AsyncPipe, CreateTodoForm],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent {
    readonly todosApiService = inject(TodosApiService);
    readonly todosService = inject(TodosService)

    constructor() {
        this.todosApiService.getTodos().subscribe(
            (response: any) => {
                this.todosService.setTodos(response)
            }
        )
    }

    deleteTodo(id: number) {
        this.todosService.deleteTodo(id)
    }

    createTodo(formItem: Todo) {
        this.todosService.createTodos(
            {
                id: new Date().getTime(),
                title: formItem.title,
                userId: formItem.userId,
                completed: formItem.completed
            }
        )
    }
}