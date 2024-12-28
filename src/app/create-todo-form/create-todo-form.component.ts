import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
})
export class TodoFormComponent {
  @Output()
  createTodo = new EventEmitter();

  form = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(1)]),
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    completed: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  submitFormTodo(): void {
    this.createTodo.emit(this.form.value);
    this.form.reset();
  }
}
