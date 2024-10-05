import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../interfaces/todo-interfaces';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {
  @Input()
  todoInput!: ITodo; // "!" - означает что данные обязательно будут но по позже. 

  @Output()
  deleteTodo = new EventEmitter();
  
  onDeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId);
  }
}
