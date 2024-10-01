import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from "/Users/shokhrukhabdulakimov/Desktop/newfolderfornormalizecss/mentoring-base/src/app/users-list/user-interface";

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {
  @Input()
  todo!: Todo;

  @Output()
  deleteTodo = new EventEmitter();

  onDeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId);
  }
}
