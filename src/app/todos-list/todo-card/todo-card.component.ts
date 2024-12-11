import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ITodo } from "../../interfaces/todo.interface";
import { CharacterLimitPipe } from "../../pipes/character-limit.pipe";

@Component({
    selector: 'app-todo-card',
    templateUrl: './todo-card.component.html',
    styleUrl: './todo-card.component.scss',
    standalone: true,
    imports: [CharacterLimitPipe]
})

export class TodoCardComponent {
    private snackBar = inject(MatSnackBar)

    @Input()
    todo!: ITodo

    @Output()
    deleteTodo = new EventEmitter()

    onDeleteTodo(userId: number) {
        this.deleteTodo.emit(userId)
        this.snackBar.open('Задача успешно удалена', 'Закрыть')
    }
}