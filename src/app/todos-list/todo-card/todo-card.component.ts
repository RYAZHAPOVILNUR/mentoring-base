import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ITodo } from "../todos-list.component";

@Component ({
    selector: 'app-todo-card',
    templateUrl: './todo-card.component.html',
    styleUrl: './todo-card.component.scss',
    standalone: true
})

export class TodoCardComponent {
    @Input()
    todo: ITodo = {
        userId: 0,
        id: 0,
        title: '',
        completed: false}

    @Output()
    deleteTodo = new EventEmitter()

    onDeleteTodo(userId: number) {
        this.deleteTodo.emit(userId)
    } 
}