import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../todo.interface';

@Component({
  selector: 'app-todos-card',
  templateUrl: './todos-card.component.html',
  styleUrl: './todos-card.component.scss',
  standalone: true,
  imports: [],
})
export class TodosCardComponent {
  @Input()
  todo: ITodo = { userId: 0, id: 0, title: '', completed: false };

  @Output()
  deleteTodos = new EventEmitter();

  onDeleteTodos(id: number) {
    this.deleteTodos.emit(id);
  }
}
