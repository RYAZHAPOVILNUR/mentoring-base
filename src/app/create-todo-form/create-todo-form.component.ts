import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss',
  imports: [ReactiveFormsModule],
})
export class CreateTodoFormComponent {
  public form = new FormGroup({
    taskName: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
  });

  @Output()
  createNewTodo = new EventEmitter();

  public submitForm(): void {
    this.createNewTodo.emit(this.form.value);
    this.form.reset();
  }
}
