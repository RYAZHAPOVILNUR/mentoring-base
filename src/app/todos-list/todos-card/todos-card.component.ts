import { Component, EventEmitter, Input, input, Output, output } from "@angular/core";

@Component ({
    selector: 'app-todos-card',
    templateUrl: './todos-card.component.html',
    styleUrl: './todos-card.component.scss',
    standalone: true,
})
export class TodosCardComponent {
    @Input()
    todo: any

    @Output()
    deleteTodo = new EventEmitter()

    onDeleteTodo(todoId: number) {
        this.deleteTodo.emit(todoId)
    }
}