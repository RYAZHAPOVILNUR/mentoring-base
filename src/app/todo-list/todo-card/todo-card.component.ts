import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Todo } from "../todo-list.component";
import { limitSymbols } from "../../pipes/limit-symbols.pipe";



@Component({
    selector: 'app-todo-card',
    templateUrl: './todo-card.component.html',
    styleUrl: './todo-card.component.scss',
    standalone: true,
    imports: [limitSymbols]
})

export class TodoCardComponent {
    @Input()

    todoCard!: Todo

    @Output()

    deleteTodoCard = new EventEmitter()

    onDeleteTodo(todoCardId: number) {
        this.deleteTodoCard.emit(todoCardId)
    }
}