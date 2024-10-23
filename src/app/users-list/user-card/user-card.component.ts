import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { User } from './../../interfaces/user-interface';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  imports: [MatButtonModule, MatCardModule, MatIconModule],
})
export class UserCardComponent {
  readonly dialog = inject(MatDialog);
  private _snackBar = inject(MatSnackBar);

  @Input()
  user: User;

  @Output()
  public deleteUser = new EventEmitter();

  @Output()
  public editUser = new EventEmitter();

  public onDeleteUser(id: number) {
    this.deleteUser.emit(id);
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 3000 });
  }

  public openDeleteUserDialog(): void {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteUser.emit(result);
        this.openSnackBar('Юзер удален!', 'ОК');
      } else {
        this.openSnackBar('Удаление отменено', '');
      }
    });
  }

  public openEditUserDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.editUser.emit(result);
        this.openSnackBar('Данные юзера изменены!', 'ОК');
      } else {
        this.openSnackBar('Редактрование отменено', '');
      }
    });
  }
}
