import { NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import { TodoCardComponent } from "./todo-card/todo-card.component";
import { Todo } from "./todo-interface";
import { todosApiService } from "../todo-api.service";

@Component({
    selector:'app-todo-card', 
    templateUrl:'./todo-list.component.html', 
    styleUrl:'./todo-list.component.scss', 
    standalone: true, 
    imports: [NgFor, TodoCardComponent]
})

export class TodoListComponent {
    readonly todosApiService = inject(todosApiService) 
    todos: Todo[] = []; 

    constructor() {

        this.todosApiService.getTodos().subscribe(
            (response: any) => {
                this.todos = response; 
            }
        )
    }

    deleteTodo(id: number) {
        this.todos = this.todos.filter(
            todo => {
                if (id===todo.id) {
                    return false;
                }
                else {
                    return true; 
                }
            }
        )
    }
}