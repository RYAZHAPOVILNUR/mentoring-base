import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss'
})
export class CreateTodoFormComponent {
  @Output() createTodo = new EventEmitter();

  public form = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    completed: new FormControl('')
  });

  public submitForm(): void {
    this.createTodo.emit(this.form.value);
    this.form.reset();
  }

  constructor() { 
    this.form.valueChanges.subscribe((formValue) => console.log(formValue));
    console.log(this.form.get('name')?.errors);
  }
}
