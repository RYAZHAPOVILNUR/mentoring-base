import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../Interfaces/todo.interface';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
  standalone: true,
})
export class TodoCardComponent {
  @Input()
  todo!: ITodo

  @Output()
  deleteTodo = new EventEmitter();

  onDeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId);
  }
}
