import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { completedValidator } from "../../../users-list/custom-validators";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-todo-dialog',
  standalone: true,
  imports: [    
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogClose,],
  templateUrl: './create-todo-dialog.component.html',
  styleUrl: './create-todo-dialog.component.scss'
})
export class CreateTodoDialogComponent {
  readonly data = inject(MAT_DIALOG_DATA);

  public fb = inject(FormBuilder);

  public formTodo = this.fb.group({
    title: this.fb.control('', [Validators.required, Validators.minLength(4)]),
    userId: this.fb.control('', [Validators.required, Validators.minLength(1)]),
    completed: this.fb.control('', [Validators.required, completedValidator()]),
  });

  public getCompletedValue(): boolean {
    const value = this.formTodo.get('completed')?.value!.trim().toLowerCase();
    if (value === 'да') return true;
    else return false;
  }

  createdTodo() {
    return {
      ...this.formTodo.value,
    }
  }
}
