import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodosApiService } from "../services/todos-api.service";
import { AsyncPipe, NgFor } from "@angular/common";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { TodosService } from "../services/todo.service";
import { CreateTodoFormComponent } from "../create-todo-form/create-todo-form.component";


          
export interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

@Component({
    selector: 'app-todos-list',
    templateUrl: './todos-list.component.html',
    styleUrl: './todos-list.component.scss',
    standalone: true,
    imports: [TodoCardComponent, NgFor, AsyncPipe, CreateTodoFormComponent],
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

        this.todosService.todos$.subscribe(
            todos => console.log(todos)
        )
    }

    deleteTodo(id: number) {
        this.todosService.deleteTodos(id)
    }

    public createTodo(formData: any) {
        this.todosService.createTodos({
            id: new Date().getTime(),
            title: formData.title,
            userId: formData.userId,
            completed: formData.completed
        })
    }
}

