import { Component, EventEmitter, Input, Output } from "@angular/core";



@Component({
    selector: 'todo-card-root',
    templateUrl: './todo-card.component.html',
    styleUrl: './todo-card.component.scss',
    standalone: true,
    imports: []
})

export class TodoCardComponent {
    @Input()

    todoCard: any

    @Output()

    deleteTodoCard = new EventEmitter()

    onDeleteTodo(todoCardId: number) {
        this.deleteTodoCard.emit(todoCardId)
    }

}