import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ITodo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.scss',
  imports: [
    ReactiveFormsModule,
    NgIf,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogClose,
  ],
  standalone: true,
})
export class EditTodoDialogComponent {
  readonly data = inject<{ todo: ITodo }>(MAT_DIALOG_DATA);

  public editTodoForm = new FormGroup({
    title: new FormControl(this.data.todo.title, [
      Validators.required,
      Validators.minLength(3),
    ]),
    userId: new FormControl(this.data.todo.userId, [
      Validators.required,
      Validators.minLength(1),
      Validators.min(1),
      this.customNumberValidator,
    ]),
    completed: new FormControl(this.data.todo.completed ? 'Да' : 'Нет', [
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
      return null;
    } else {
      return { invalidAnswer: true };
    }
  }

  public getTodoCompletedValue(): boolean {
    const enteredValue = this.editTodoForm
      .get('completed')
      ?.value!.trim()
      .toLowerCase();

    if (enteredValue === 'да') {
      return true;
    }
    return false;
  }

  get todoWithUpdatedFields() {
    return {
      ...this.editTodoForm.value,
      completed: this.getTodoCompletedValue(),
      id: this.data.todo.id,
    };
  }
}
