import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-todo-form',
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
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
    if (enteredValue === 'да' || enteredValue === 'нет') {
      console.log(enteredValue);
      console.log('yess');
      return null;
    } else {
      console.log(enteredValue);
      console.log('nooo');
      return { invalidAnswer: true };
    }
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
