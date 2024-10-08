import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoInterface } from '../../interfaces/todo-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {
  @Input()
  todo!: TodoInterface;

  @Output()
  deleteTodo = new EventEmitter();

  onDeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId);
  }
}
