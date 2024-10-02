import { Component, EventEmitter, Input, input, Output, output } from "@angular/core";
import { Todo } from "../../todo-interface";

@Component ({
    selector: 'app-todos-card',
    templateUrl: './todos-card.component.html',
    styleUrl: './todos-card.component.scss',
    standalone: true,
})
export class TodosCardComponent {
    @Input()
    todo!: Todo

    @Output()
    deleteTodo = new EventEmitter()

    onDeleteTodo(todoId: number) {
        this.deleteTodo.emit(todoId)
    }
}