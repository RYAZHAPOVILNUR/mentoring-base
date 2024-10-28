import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from "@angular/common";
import { Todo } from "../todos-list.component";

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {
  @Input()
  todo!: Todo

  @Output()
  deleteTodo = new EventEmitter()

  onDeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId)
  }
}
