import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import {  MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import { NgStyle } from "@angular/common";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";

export function completedValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();
    if (value === 'да' || value === 'нет') {
      return null;
    }
    return { invalidCompleted: true }
  }
}

@Component({
  selector: 'app-create-todo-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    NgStyle
  ],
  templateUrl: './create-todo-dialog.component.html',
  styleUrl: './create-todo-dialog.component.scss'
})
export class CreateTodoDialogComponent {
  @Output()
  createTodo = new EventEmitter();

  readonly dialogRef = inject(MatDialogRef<CreateTodoDialogComponent>)

  public focused = false;

  public form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userId: new FormControl('',[Validators.required]),
    completed: new FormControl('', [Validators.required, completedValidator()])
  })

  private getCompletedValue() {
    const value = this.form.get('completed')?.value!.trim().toLowerCase();
    if (value === 'да') {
      return true;
    } else {
      return false;
    }
  }

  public submitForm() {
    console.log(this.form.value)
    this.dialogRef.close({...this.form.value, completed: this.getCompletedValue()})
  }
}
