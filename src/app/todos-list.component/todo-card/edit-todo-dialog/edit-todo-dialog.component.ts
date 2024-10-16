import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';


export function completedValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();
    if (value === 'да' || value === 'нет') {
      return null;
    }
    return { returnInvalid: true };
  };
}

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

  get userWithUpdatedFields() {
    return {
      ...this.formTodo.value,
      id: this.data.todo.id
    };
  }
}
