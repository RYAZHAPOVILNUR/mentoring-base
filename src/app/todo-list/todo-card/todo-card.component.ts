import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-todo-card',
  standalone: true,
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
  imports: [NgFor]
})

export class TodoCardComponent {
  @Input()
  todo: any;

  @Output()
  deleteTodo = new EventEmitter();

  onDeleteTodo (todoId: number) {
    this.deleteTodo.emit(todoId);
  }
}
