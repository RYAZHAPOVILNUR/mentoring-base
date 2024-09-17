import { NgFor } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component ({
  selector: 'app-todo-card',
  templateUrl: './todos-card.component.html',
  styleUrl: './todos-card.component.scss',
  standalone: true,
  imports: [NgFor]
})

export class TodosCardComponent {
  @Input () 
  todo: any

  @Output ()
  deleteTodo = new EventEmitter();

  onDeleteTodo (todoId: number) {
    this.deleteTodo.emit(todoId)
  }
}

