import { Component, inject } from '@angular/core';
import {  FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { completedValidator } from '../../../users-list/custom-validators';

@Component({
  selector: 'app-edit-todo-dialog',
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatDialogModule, MatIconModule],
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.scss'
})
export class EditTodoDialogComponent {
  readonly data = inject(MAT_DIALOG_DATA);

  public fb = inject(FormBuilder);

  public formTodo = this.fb.group({
    title: this.fb.control(this.data.todo.title, [Validators.required, Validators.minLength(4)]),
    userId: this.fb.control(this.data.todo.userId, [Validators.required, Validators.minLength(1)]),
    completed: this.fb.control(this.data.todo.completed, [Validators.required, completedValidator()]),
  });

  public getCompletedValue(): boolean {
    const value = this.formTodo.get('completed')?.value!.trim().toLowerCase();
    if (value === 'да') return true;
    else return false;
  }

  get userWithUpdatedFields() {
    return {
      ...this.formTodo.value,
      id: this.data.todo.id,
      completed: this.getCompletedValue(),
    };
  }
}
