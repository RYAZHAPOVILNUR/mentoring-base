import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UsersService } from '../services/users-services/users.service';
import { CreateUserDialogComponent } from '../dialogs/user-dialogs/create-user-dialog/create-user-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    CreateUserDialogComponent,
  ],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss',
})
export class CreateUserFormComponent {
  @Output()
  createUser = new EventEmitter();

  public form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    website: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    companyName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  constructor(
    private snackBar: MatSnackBar,
    private userService: UsersService,
    public dialog: MatDialog
  ) {}

  openCreateUserDialog() {
    const dialogRef = this.dialog.open(CreateUserDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.createUser.emit(result);
      }
    });
  }

  public submitForm(): void {
    if (this.form.valid) {
      const user = this.form.value;
      const email = user.email;

      if (email && this.userService.existingUser(email)) {
        this.snackBar.open('ТАКОЙ EMAIL УЖЕ ЗАРЕГИСТРИРОВАН', 'Ок', {
          duration: 3000,
        });
      } else {
        this.createUser.emit(user);
        this.form.reset();
        this.snackBar.open('Новый пользователь успешно добавлен!', 'Ок', {
          duration: 5000,
        });
      }
    }
  }
}