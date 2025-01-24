import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { Todo } from './todos-interface';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodosCardComponent {
  @Input()
  todo!: Todo

  @Output()
  deleteTodo = new EventEmitter<number>();

  onDeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId);
  }
}