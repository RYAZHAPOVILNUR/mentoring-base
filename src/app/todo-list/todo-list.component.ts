import { AsyncPipe, NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { Todo } from "./todo-interface";
import { todosApiService } from "../todo-api.service";
import { TodosService } from "../todos.service";
import { CreateTodoFormComponent } from "../create-todo-form/create-todo-form.component";

@Component({
    selector:'app-todo-card', 
    templateUrl:'./todo-list.component.html', 
    styleUrl:'./todo-list.component.scss', 
    standalone: true, 
    imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodoFormComponent]
})

export class TodoListComponent {
    readonly todosApiService = inject(todosApiService);
    readonly todosService = inject(TodosService);  

    constructor() {
        this.todosApiService.getTodos().subscribe(
            (response: Todo[]) => {
                this.todosService.setTodos(response); 
            }
        )
    }

    deleteTodo(id: number) {
        this.todosService.deleteTodo(id); 
    }

    editTodo(todo: Todo) {
        this.todosService.editTodos(todo); 
    }

    public createTodo(formData: any) {
        this.todosService.createTodos({
            id: new Date().getTime(), 
            userId: formData.userId, 
            title: formData.title, 
            completed: formData.completed, 
        })
    }
}