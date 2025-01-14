import { AsyncPipe, NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { Todo } from "./todo-interface";
import { todosApiService } from "../todo-api.service";
import { TodosService } from "../todos.service";

@Component({
    selector:'app-todo-card', 
    templateUrl:'./todo-list.component.html', 
    styleUrl:'./todo-list.component.scss', 
    standalone: true, 
    imports: [NgFor, TodoCardComponent, AsyncPipe]
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
}