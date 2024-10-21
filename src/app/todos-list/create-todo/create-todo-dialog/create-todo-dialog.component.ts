import { NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import {
  customNumberValidator,
  customYesNoValidator,
} from '../../../custom-validators/custom-validators';

@Component({
  selector: 'app-create-todo-dialog',
  templateUrl: './create-todo-dialog.component.html',
  styleUrl: './create-todo-dialog.component.scss',
  standalone: true,
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
})
export class CreateTodoDialogComponent {
  readonly dialogRef = inject(MatDialogRef<CreateTodoDialogComponent>);

  @Output()
  createTodo = new EventEmitter();

  public todoForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userId: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.min(1),
      customNumberValidator,
    ]),
    completed: new FormControl('', [Validators.required, customYesNoValidator]),
  });

  public getTodoCompletedValue(): boolean {
    let enteredValue = this.todoForm.get('completed')?.value;

    if (enteredValue) enteredValue = enteredValue.trim().toLowerCase();

    if (enteredValue === 'да') {
      return true;
    }
    return false;
  }

  get todoWithFilledValues() {
    return { ...this.todoForm.value, completed: this.getTodoCompletedValue() };
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
