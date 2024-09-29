import { NgIf } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-todos-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-todos-form.component.html',
  styleUrl: './create-todos-form.component.scss',
})
export class CreateTodosFormComponent {
  @Output()
  createTodo = new EventEmitter();

  public form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(7)]),
    userId: new FormControl('', [Validators.required, Validators.minLength(1)]),
    completed: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  public submitTodo(): void {
    this.createTodo.emit(this.form.value);
    console.log(this.form.invalid);
  }
}
