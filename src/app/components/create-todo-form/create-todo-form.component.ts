import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-create-todo-form',
  templateUrl: './create-todo-form.html',
  styleUrl: './create-todo-form.scss',
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class CreateTodoFormComponent {
  @Output()
  createTodo = new EventEmitter();

  public form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    author: new FormControl('', [Validators.required]),
    completed: new FormControl('', [Validators.required]),
  });
  private getCompletedValue(): boolean{
    return (this.form.get("completed")?.value!.trim().toLowerCase()==="да") ? true : false;
  }
  public submitForm(): void {
    this.createTodo.emit({
      ...this.form.value,
      completed: this.getCompletedValue(),
    });
    this.form.reset();
  }
}
