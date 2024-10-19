import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { completedValidator } from '../validator';
import { CompletedValueGetter } from '../completed-value-getter';
@Component({
  selector: 'app-create-todo-form',
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
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss',
})
export class CreateTodoFormComponent {
  readonly dialogRef = inject(MatDialogRef<CreateTodoFormComponent>);
  private dialog = inject(MatDialog);
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

  openCreateTodoDialog() {
    const dialogRef = this.dialog.open(CreateTodoFormComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.createTodo.emit(result);
      }
    });
  }

  submitForm() {
    return {
      ...this.formTodo.value,
      completed: this.completedValueGetter.getCompletedValue(),
    };
  }
}