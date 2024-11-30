import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ITodo } from "../todos-list.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component ({
    selector: 'app-todo-card',
    templateUrl: './todo-card.component.html',
    styleUrl: './todo-card.component.scss',
    standalone: true
})

export class TodoCardComponent {
    constructor(private snackBar: MatSnackBar) {}

    @Input()
    todo!: ITodo 

    @Output()
    deleteTodo = new EventEmitter()

    onDeleteTodo(userId: number) {
        this.deleteTodo.emit(userId)
    }
    
    snackBarTodo() {
        this.snackBar.open('Задача успешно удалена', 'Закрыть')
    }
}