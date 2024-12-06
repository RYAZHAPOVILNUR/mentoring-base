import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NgFor} from "@angular/common";

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-todo-card',
  standalone: true,
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
  imports: [NgFor]
})

export class TodoCardComponent {
  @Input()
  todo: Todo | undefined;

  @Output()
  deleteTodo: EventEmitter<number> = new EventEmitter();

  onDeleteTodo (todoId: number) {
    this.deleteTodo.emit(todoId);
  }
}
