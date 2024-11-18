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
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { IUser } from '../../Interfaces/user.interface';
import {
  MatDialog,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';

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
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrl: './create-user-dialog.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogClose,
  ],
})
export class CreateUserDialogComponent {
  private snackBar = inject(MatSnackBar);

  private dialogRef = inject(MatDialogRef<CreateUserDialogComponent>);

  public readonly form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    website: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    company: new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    }),
  });

  public submitForm(): void {
    this.dialogRef.close(this.form.value);
  }
}
