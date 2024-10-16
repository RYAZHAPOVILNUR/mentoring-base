import { NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


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
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss',
})
export class CreateTodoFormComponent {
readonly dialogRef = inject(MatDialogRef<CreateTodoFormComponent>)

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

  constructor(
    private snackBar: MatSnackBar,

    public dialog: MatDialog
  ) {}

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

  private getCompletedValue(): boolean {
    const value = this.formTodo.get('completed')?.value!.trim().toLowerCase();
    if (value === 'да') return true;
    else return false;
  }

  public submitForm(): void {
    if (this.formTodo.valid) {
      this.createTodo.emit({
        ...this.formTodo.value,
        completed: this.getCompletedValue(),
      });
      this.formTodo.reset();
      this.snackBar.open('Задача успешно создана', '🍕', {
        duration: 3000,
      });
    }
  }

 public closeDialog() {
  this.dialogRef.close()
 }
}
