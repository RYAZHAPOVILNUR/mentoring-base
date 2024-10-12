import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todos-list.component';

@Component({
  standalone: true,
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
  imports: [NgClass],
})
export class TodoCardComponent {
  @Input()
  todo: Todo;

  @Output()
  deleteTodo = new EventEmitter();

  onDeleteTodo(id: number) {
    this.deleteTodo.emit(id);
  }
}
