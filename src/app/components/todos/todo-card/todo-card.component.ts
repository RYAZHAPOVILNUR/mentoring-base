import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
  standalone: true,
  imports: []
})
export class TodoCardComponent {
  @Input()
  todo: any
  @Output()
  deleteTodo = new EventEmitter();
  
  onDeleteTodo(todoId: number)  {
    this.deleteTodo.emit(todoId) 
  }

}