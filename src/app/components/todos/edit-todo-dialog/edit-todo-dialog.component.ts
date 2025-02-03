import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Todo } from '../todos.component';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogModule, } from '@angular/material/dialog';

export function completedValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();
    if (value === 'да' || value === 'нет') {
      return null;
    }
    return {invalidCompleted: true};
  };
}


@Component({
  selector: 'app-edit-todo-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule,  MatButtonModule, MatIconModule, MatDialogClose, MatDialogModule],
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.scss'
})
export class EditTodoDialogComponent {
 private readonly data = inject<{todo: Todo}>(MAT_DIALOG_DATA);

   public form = new FormGroup({
     title: new FormControl(this.data.todo.title, [Validators.required, Validators. minLength(3)]),
     userId: new FormControl(this.data.todo.userId, [Validators.required, Validators. minLength(1)]),
     completed: new FormControl('', [Validators.required, completedValidator()]),
   });

   private getCompletedValue(): boolean {
    const value = this.form.get('completed')?.value!.trim().toLowerCase();
    if (value === 'да')
      return true;
    else return false;
  }

   get userWithUpdatedFields() {
    return {
        ...this.form.value,
        id: this.data.todo.id,
    };
}
}
