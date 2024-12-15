import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todos-list.interface';
import { CustomMaxLenghtPipe } from '../../pipes/max-lenght.pipes';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-todos-card',
  standalone: true,
  imports: [CustomMaxLenghtPipe, MatButtonModule],
  templateUrl: './todos-card.component.html',
  styleUrl: './todos-card.component.scss'
})
export class TodosCardComponent {
  @Input()
  todo!: Todo;

  @Output()
  editTodo = new EventEmitter()
  
  onEditTodo(todo: Todo) {
    this.editTodo.emit(todo)
  }

  @Output()
  deleteTodo = new EventEmitter()

  onDeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId);
  }
}
