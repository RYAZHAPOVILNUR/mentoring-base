import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  imports: [MatDialogModule, MatSnackBarModule, MatButtonModule, MatCardModule],
  standalone: true,
})
export class UserCardComponent {
  @Input()
  user!: IUser;

  @Output()
  deleteUser = new EventEmitter<number>();

  @Output()
  editUser = new EventEmitter<IUser>();

  readonly dialog = inject(MatDialog);

  private _snackBar = inject(MatSnackBar);

  public openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      width: '600px',
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
      if (result) {
        this.deleteUser.emit(this.user.id);
        this._snackBar.open('Пользователь удалён!', 'OK', { duration: 3000 });
      } else {
        this._snackBar.open('Отмена удаления пользователя!', 'OK', {
          duration: 3000,
        });
      }
    });
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe((editedResult: IUser) => {
      if (editedResult) {
        this.editUser.emit(editedResult);
        this._snackBar.open('Пользователь отредактирован!', 'OK', {
          duration: 3000,
        });
      }
    });
  }
}
