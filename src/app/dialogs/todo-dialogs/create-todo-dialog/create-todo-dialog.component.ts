import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CompletedValueGetter } from '../../../completed-value-getter';
import { MatButtonModule } from '@angular/material/button';
import { completedValidator } from '../../../validator';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create-todo-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  templateUrl: './create-todo-dialog.component.html',
  styleUrl: './create-todo-dialog.component.scss',
})
export class CreateTodoDialogComponent {
  readonly dialogRef = inject(MatDialogRef<CreateTodoDialogComponent>);

  @Output()
  createTodo = new EventEmitter();

  public formTodo = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(50),
    ]),
    userId: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    completed: new FormControl('', [Validators.required, completedValidator()]),
  });

  private completedValueGetter = new CompletedValueGetter(this.formTodo);

  submitForm() {
    return {
      ...this.formTodo.value,
      completed: this.completedValueGetter.getCompletedValue(),
    };
  }
}