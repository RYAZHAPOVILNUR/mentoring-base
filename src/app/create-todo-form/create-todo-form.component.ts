import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
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
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userId: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.min(1),
      this.customNumberValidator,
    ]),
    completed: new FormControl('', [
      Validators.required,
      this.customYesNoValidator,
    ]),
  });

  public customNumberValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const enteredValue = control.value;
    const regex = /^\d+$/;
    if (!regex.test(enteredValue)) {
      return { isNotNumber: true };
    }
    return null;
  }

  public customYesNoValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const enteredValue = control.value?.trim().toLowerCase();
    if (enteredValue !== 'да' && enteredValue !== 'нет') {
      return { invalidAnswer: true };
    }
    return null;
  }

  public getTodoCompletedValue(): boolean {
    const enteredValue = this.todoForm
      .get('completed')
      ?.value!.trim()
      .toLowerCase();

    if (enteredValue === 'да') {
      return true;
    }
    return false;
  }

  public submitTodoForm(): void {
    this.createTodo.emit({
      ...this.todoForm.value,
      completed: this.getTodoCompletedValue(),
    });
    this.todoForm.reset();
  }
}
