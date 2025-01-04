import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodoCardComponent } from "./todos-card/todo-card.component";
import { TodosApiService } from "../todos-api.service";
import { HttpClient } from "@angular/common/http";
// import { TodosService } from "../todo.service";
import { CreateTodoFormComponent } from "../create-todo-form/create-todo-form.component";
import { Store } from "@ngrx/store";
import { TodoActions } from "./store/todo.actions";
import { selectTodo } from "./store/todo.selectors";

export interface Todo {
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
    imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodoFormComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent {
    readonly todosApiService = inject(TodosApiService)

    private readonly store = inject(Store)
    todos$ = this.store.select(selectTodo)

    constructor() {
        this.todosApiService.getTodos().subscribe(
            (Responce: any) => {
                this.store.dispatch(TodoActions.setTodo({ todos: Responce }));
            }
        )
    }
    deleteTodo(id: number) {
        this.store.dispatch(TodoActions.deleteTodo({ id }))
    }
    public createTodo(formData: Todo) {
        this.store.dispatch(
            TodoActions.createTodo({
                todos: {
                    id: new Date().getTime(),
                    userId: formData.userId,
                    title: formData.title,
                    completed: formData.completed
                }
            })
        )
    }
}
