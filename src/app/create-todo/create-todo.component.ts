import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
})
export class CreateTodoComponent {
  @Output()
  createTask = new EventEmitter();

  public form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    userID: new FormControl('', [Validators.required]),
  });

  submitForm() {
    this.createTask.emit(this.form.value);
    console.log(this.form.value)
  }
}
