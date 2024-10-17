import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component ({
    selector: 'app-todo-card',
    templateUrl: './todo-card.component.html',
    styleUrl: './todo-card.component.scss',
    standalone: true
})

export class TodoCardComponent {
    @Input()
    todo: any

    @Output()
    deleteTodo = new EventEmitter()

    onDeleteTodo(userId: number) {
        this.deleteTodo.emit(userId)
    } 
}