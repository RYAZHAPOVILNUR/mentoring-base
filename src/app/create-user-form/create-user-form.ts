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
import { IUser } from '../Interfaces/user.interface';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

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
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.html',
  styleUrl: './create-user-form.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule
  ],
})
export class CreateUserFormComponent {
  @Output()
  createUser = new EventEmitter<IUser>();

  private snackBar = inject(MatSnackBar);

  public readonly form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    website: new FormControl('', [Validators.required, Validators.minLength(3),]),
    company: new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    }),
  });

  public submitForm(): void {
    this.createUser.emit(this.form.value as IUser);
    this.form.reset();
    this.snackBar.open('Новый пользователь добавлен', 'ok', {
      duration: 3000, 
    });
  }
}
