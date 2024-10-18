import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Todo } from '../../../interfaces/todo-interfaces';
import { MatCardModule } from '@angular/material/card';
import { completedValidator } from '../../../create-todo-form/create-todo-form.component';

@Component({
  selector: 'app-edit-todo-dialog',
  standalone: true,
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.scss',
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogClose,
  ],
})
export class EditTodoDialogComponent {
  readonly data = inject<{ todo: Todo }>(MAT_DIALOG_DATA);
  constructor(public dialogRef: MatDialogRef<EditTodoDialogComponent>) {}

  public formTodo = new FormGroup({
    title: new FormControl(this.data.todo.title, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(50),
    ]),
    userId: new FormControl(this.data.todo.userId, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    completed: new FormControl(this.data.todo.completed ? 'да' : 'нет', [
      Validators.required,
      completedValidator(),
    ]),
  });

  get userWithUpdatedFields() {
    return {
      ...this.formTodo.value,
      id: this.data.todo.id,
      completed: this.formTodo.value.completed === 'да',
    };
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }
  public onSubmit(): void {
    if (this.formTodo.valid) {
      this.dialogRef.close(this.userWithUpdatedFields);
    }
  }
}