import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todos-interface';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {
  @Input()
  todo!: Todo;

  @Output()
  deleteTodo = new EventEmitter()

  onDeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId)
  }

  readonly tasksText: string = 'ТЕКСТ ЗАДАЧИ'

  readonly tasksAuthor: string = 'АВТОР ЗАДАЧИ'

  readonly tasksCompleted: string = 'ЗАДАЧА ЗАВЕРШЕНА'

  readonly todoDelete: string = 'Todo delete'
}
