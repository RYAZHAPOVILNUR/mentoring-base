import { NgIf } from '@angular/common';
import { Component, Output, EventEmitter, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  Validators,
  FormBuilder,
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

  public fb = inject(FormBuilder);

  public form = this.fb.group({
    title: this.fb.control('', [Validators.required, Validators.minLength(7)]),
    userId: this.fb.control('', [Validators.required, Validators.minLength(1)]),
    completed: this.fb.control('', [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  public submitTodo(): void {
    this.createTodo.emit(this.form.value);
    console.log(this.form.invalid);
  }
}
