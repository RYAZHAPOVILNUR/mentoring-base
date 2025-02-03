import { Component, EventEmitter, inject, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

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
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule,  MatButtonModule,  MatIconModule],
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss'
})

export class CreateTodoFormComponent {

  @Output()
  createTodo = new EventEmitter();

  readonly dialogRef = inject(MatDialogRef<CreateTodoFormComponent>);

  public form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators. minLength(3)]),
    userId: new FormControl('', [Validators.required, Validators. minLength(1)]),
    completed: new FormControl('', [Validators.required, completedValidator()]),
  });

  private getCompletedValue(): boolean {
    const value = this.form.get('completed')?.value!.trim().toLowerCase();
    if (value === 'да')
      return true;
    else return false;
  }

  public submitForm(): void {
    this.dialogRef.close({...this.form.value, completed: this.getCompletedValue ()});
    }
}
 