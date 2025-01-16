import { Component, EventEmitter, Input, Output, input } from "@angular/core";
import { Todo } from "../todo-interface";

@Component({
    selector: 'app-todo-card', 
    templateUrl: './todo-card.component.html', 
    styleUrl: './todo-card.component.scss', 
    standalone: true, 
})

export class TodoCardComponent {
    // readonly todo = input.required<Todo>(); 
    @Input()
    todo!: Todo; 

    @Output() 
    deleteTodo = new EventEmitter<number>(); 

    onDeleteTodo(todoId: number) {
        this.deleteTodo.emit(todoId); 
    }
}