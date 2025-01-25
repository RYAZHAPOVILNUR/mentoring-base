import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Todo } from '../../interfaces/todo.interface';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: 'edit-todo-dialog.component.html',
  styleUrl: 'edit-todo-dialog.component.scss',
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatDialogClose,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  standalone: true,
})
export class EditTodoDialogComponent {
  readonly data = inject<{ todo: Todo }>(MAT_DIALOG_DATA);

  public formTodo = new FormGroup({
    title: new FormControl(this.data.todo.title, [
      Validators.required,
      Validators.minLength(3),
    ]),
    userId: new FormControl(this.data.todo.userId, [Validators.required]),
    completed: new FormControl(this.data.todo.completed, [Validators.required]),
  });

  get todoWithUpdatedFields() {
    return {
      ...this.formTodo.value,
      id: this.data.todo.id,
    };
  }
}
