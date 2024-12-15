import { NgFor } from "@angular/common";
import { Component, EventEmitter, Input, Output, output } from "@angular/core";
import { Todo } from "../todos-list.component";
import { CustomSlicePipe } from "../../My Pipes/slicePipe.pipe";
import { redDirective } from "../../my directives/red.directive";


@Component({
    selector: 'app-todo-card',
    templateUrl: './todo-card.component.html',
    styleUrl: './todo-card.component.scss',
    standalone: true,
    imports: [CustomSlicePipe, redDirective]
})
export class TodoCardComponent {
    @Input()
    todo!: Todo
    @Output()
    deleteTodo = new EventEmitter();

    onDeleteTodo(todoId: number) {
        this.deleteTodo.emit(todoId);
    }
}