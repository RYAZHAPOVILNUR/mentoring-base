import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Todo } from "../todos-list.component";

@Component({
    selector: 'app-todo-card',
    templateUrl: './todo-card.component.html',
    styleUrls: ['./todo-card.component.scss'],
    standalone: true
})

export class TodoCardComponent {
    @Input()
    todo!: Todo;

    @Output()
    deleteTodo = new EventEmitter<number>();

    onDeleteTodo(todoId: number) {
        this.deleteTodo.emit(todoId);
    }

}