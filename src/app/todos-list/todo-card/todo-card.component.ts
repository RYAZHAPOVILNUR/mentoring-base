import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreateTodoFormComponent } from '../../create-todo-form/create-todo-form.component';
import { Todo } from '../../interfaces/todo-interfaces';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [CreateTodoFormComponent, MatButtonModule],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {
  @Input()
  todo!: Todo;

  @Output()
  deleteTodo = new EventEmitter();

  onDeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId);
  }
}