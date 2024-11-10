import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { IUser } from '../../Interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card-component.html',
  styleUrl: './user-card.component.scss',
  standalone: true,
  imports: [MatDialogModule, MatSnackBarModule, MatCardModule, MatButtonModule],
})
export class UserCardComponent {
  @Input()
  public user!: IUser;

  @Output()
  public deleteUser = new EventEmitter<IUser>();

  @Output()
  public editUser = new EventEmitter<IUser>();

  readonly dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  public openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      width: '600px',
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
      console.log('The dialog was closed');
      if (result) {
        this.deleteUser.emit(this.user);
        this.snackBar.open('Пользователь удален', 'ok', {
          duration: 3000,
        });
        console.log('Пользователь удален', this.user.id);
      } else
        this.snackBar.open('Отмена удаления', 'ok', {
          duration: 3000,
        });
      console.log(result);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe((editResult) => {
      console.log('МОДАЛКА ЗАКРЫЛАСЬ, ЗНАЧЕНИЕ ФОРМЫ: ', editResult);
      if (editResult) {
        this.editUser.emit(editResult);
        this.snackBar.open('Пользователь изменен', 'ok', {
          duration: 3000,
        });
      }
    });
  }
  onDeleteUser(userId: IUser) {
    this.deleteUser.emit(userId);
  }
}
