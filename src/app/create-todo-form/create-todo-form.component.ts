import { Component, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-todo-form',
  templateUrl: './create-todo-form.html',
  styleUrls: ['./create-todo-form.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, MatButtonModule]

})
export class CreateTodoFormComponent {
  @Output()
  createTodo = new EventEmitter();

  public form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    userId: new FormControl('', [Validators.required, Validators.minLength(3)]),
    completed: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  public submitForm(): void {
    this.createTodo.emit(this.form.value);
    this.form.reset();
  }

  constructor() {
    this.form.valueChanges.subscribe(formValue => console.log(formValue ));
  }
}
