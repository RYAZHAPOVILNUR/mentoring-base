import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Todo} from "../../interfaces/todo-interface";

@Component({
  selector: 'app-todo-card',
  standalone: true,
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})

export class TodoCardComponent {
  @Input()
  todo!: Todo;

  @Output()
  deleteTodo: EventEmitter<number> = new EventEmitter();

  onDeleteTodo (todoId: number) {
    this.deleteTodo.emit(todoId);
  }
}
