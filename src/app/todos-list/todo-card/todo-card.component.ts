import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todos-interface';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule],
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
