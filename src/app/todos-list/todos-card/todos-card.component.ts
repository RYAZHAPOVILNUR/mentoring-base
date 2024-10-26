import {
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { Todo } from '../../todo-interface';
import { TextLenghtPipe } from "../../pipes/text-length.pipe";

@Component({
    selector: 'app-todos-card',
    templateUrl: './todos-card.component.html',
    styleUrl: './todos-card.component.scss',
    standalone: true,
    imports: [TextLenghtPipe],
})
export class TodosCardComponent {
    @Input()
    todo!: Todo;

    @Output()
    deleteTodo = new EventEmitter();

    @Output()
    editTodo = new EventEmitter();

    onDeleteTodo(todoId: number) {
        this.deleteTodo.emit(todoId);
    }
}
