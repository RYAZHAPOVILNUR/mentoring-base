import { NgFor } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Todo } from "../../interfaces/todo-interface";
import { TodoCutPipe } from "../../pipes/todo.pipe";

@Component ({
  selector: 'app-todo-card',
  templateUrl: './todos-card.component.html',
  styleUrl: './todos-card.component.scss',
  standalone: true,
  imports: [NgFor, TodoCutPipe]
})
export class TodosCardComponent {
  @Input () 
  todo!: Todo

  @Output ()
  deleteTodo = new EventEmitter();

  onDeleteTodo (todoId: number) {
    this.deleteTodo.emit(todoId)
  }
}

