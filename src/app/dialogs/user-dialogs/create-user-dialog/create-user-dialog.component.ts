import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogClose,
  ],
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.scss'],
})
export class CreateUserDialogComponent {
  public form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
     Validators.required,
     Validators.minLength(6),
   ]),
    website: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    company: new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    }),
  });

  constructor(
    public dialogRef: MatDialogRef<CreateUserDialogComponent>,
    private snackBar: MatSnackBar,
  ) {}

  public submitForm(): void {
   if (this.form.valid) {
     const user = this.form.value;
     this.dialogRef.close(user);
     this.snackBar.open('Новый пользователь успешно добавлен!', 'Ок', {
       duration: 5000,
     });
   }
 }
}