import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NgFor} from "@angular/common";
import {Todo} from "../todo-interface";

@Component({
  selector: 'app-todo-card',
  standalone: true,
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
  imports: [NgFor]
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
