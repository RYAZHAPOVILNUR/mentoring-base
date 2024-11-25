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
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ITodo } from '../../../Interfaces/todo.interface';

export function completedValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();
    if (value === 'да' || value === 'нет') {
      return null;
    }
    return { invalidCompleted: true };
  };
}

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogClose,
  ],

})
export class EditTodoDialogComponent {
  readonly data = inject<{ todo: ITodo }>(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<EditTodoDialogComponent>);

  public readonly form = new FormGroup({
    userId: new FormControl(this.data.todo.userId, [Validators.required]),
    title: new FormControl(this.data.todo.title, [
      Validators.required,
      Validators.minLength(3),
    ]),
    completed: new FormControl(this.data.todo.completed? 'да' : 'нет', [
      Validators.required,
      completedValidator(),
    ]),
  });

  get todoWithUpdatedField() {
    return {
      ...this.form.value,
      id: this.data.todo.id,
    };
  }

  public submitForm(): void {
    this.dialogRef.close(this.form.value);
  }
}
