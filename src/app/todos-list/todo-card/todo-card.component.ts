import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todos-list.component';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {
  @Input() todo!: Todo
  @Output() deleteTodo = new EventEmitter<number>();

  onDelete() {
    this.deleteTodo.emit(this.todo.id);
  }
}
