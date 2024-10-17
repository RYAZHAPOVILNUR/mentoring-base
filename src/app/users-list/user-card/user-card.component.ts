import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { User } from '../user-interface';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { CreateUserDialogComponent } from '../../create-user-form/create-user-dialog/create-user-dialog.component';
import { DeleteUserConfirmationComponent } from '../delete-user-confirmation/delete-user-confirmation.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  standalone: true,
  imports:[MatSnackBarModule,MatCardModule]
})
export class UserCardComponent {

  constructor(public confirmationDialog: MatDialog) {}

  @Input()
  user!: User;

  @Output()
  deleteUser = new EventEmitter();

  @Output()
  createUser = new EventEmitter();

  @Output()
  editUser = new EventEmitter();

  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId);
  }

  deleteUserDialog(): void {
    this.confirmationDialog
      .open(DeleteUserConfirmationComponent, {
        data: `Do you want to delete user?`
      })
      .afterClosed()
      .subscribe((confirmation: Boolean) => {
        if (confirmation) {
          this.onDeleteUser(this.user.id)
          alert("User is deleted");
        }
      });
  }

  readonly dialog = inject(MatDialog);

  editUserDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe((editResult: User) => {
      if (editResult) {
        this.editUser.emit(editResult);
        this.openSnackBar()
      }
    });
  }

  readonly snackBar = inject(MatSnackBar);

  openSnackBar(): void {
    this.snackBar.open('Пользователь редактирован🐒', 'Закрыть', {
      duration: 2000
    });
  }

  readonly dialogTwo = inject(MatDialog);

  createUserDialog(): void {
    const dialogRef = this.dialogTwo.open(CreateUserDialogComponent, {
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe((createResult: User) => {
      if (createResult) {
        this.createUser.emit(createResult);
        this.openSnackBarTwo()
      }
    });
  }

  readonly snackBarCreate = inject(MatSnackBar);

  openSnackBarTwo(): void {
    this.snackBar.open('Пользователь создан🐒', 'Закрыть', {
      duration: 2000
    });
  }
}
