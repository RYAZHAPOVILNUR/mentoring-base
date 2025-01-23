import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NgFor } from "@angular/common";

@Component({
    selector: 'app-todo-card',
    templateUrl: './todo-card.component.html',
    styleUrls: ['./todo-card.component.scss'],
    standalone: true
})

export class TodoCardComponent {
    @Input()
    todo: any;

    @Output()
    deleteTodo = new EventEmitter();

    onDeleteTodo(todoId: number) {
        this.deleteTodo.emit(todoId);
    }

}