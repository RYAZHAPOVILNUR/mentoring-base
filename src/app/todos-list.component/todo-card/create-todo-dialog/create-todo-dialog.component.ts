import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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
  selector: 'app-create-todo-dialog',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,MatIconModule, ReactiveFormsModule, MatDialogModule],
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
