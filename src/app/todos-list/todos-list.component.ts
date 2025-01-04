import { Component, inject } from "@angular/core";
import { TodosApiService } from "../todos-api.service";
import { AsyncPipe, NgFor } from "@angular/common";
import { TodoCardComponent } from "./todos-card/todo-card.component";
import { TodosService } from "../todos.service";
import { CreateTodoForm } from "../create-todo-form/create-todo-form.component";

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
    imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodoForm]
})

export class TodosListComponent {
    readonly todosApiService = inject(TodosApiService);
    readonly todosService = inject(TodosService)


    deleteTodo(id: number) {
        this.todosService.deleteTodos(id)
    };


    public createTodo(formData: any) {
        console.log('ДАННЫЕ ФОРМЫ:', formData);
        this.todosService.createTodos({
            id: new Date().getTime(),
            userId: formData.userId,
            title: formData.title,
            completed: formData.completed
        })
    };
    
    
    constructor() {
        this.todosApiService.getTodos().subscribe(
            (response: any) => {
                this.todosService.setTodos(response)
            }
        )

        this.todosService.todosSubject.subscribe(
            todos => console.log(todos)
        )
    }
}