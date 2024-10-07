import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-todo-form',
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
})
export class CreateTodoFormComponent {
  @Output()
  createTodo = new EventEmitter();

  public todoForm = new FormGroup({
    todoName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    todoAuthor: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.min(1),
    ]),
    todoCompleted: new FormControl('', []),
  });

  public submitTodoForm(): void {
    this.createTodo.emit(this.todoForm.value);
    this.todoForm.reset();
  }
}
