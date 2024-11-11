import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { User } from "../users-list.component";
import { MatDialog } from "@angular/material/dialog";
import { MatDialogModule } from '@angular/material/dialog'
import { EditUserDialogComponent } from "../edit-user-dialog/edit-user-dialog.component";
import { DeleteUserDialogComponent } from "../delete-user-dialog/delete-user-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ChangeViewPhonePipe } from "../../pipes/change-view-phone.pipe";

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatDialogModule, ChangeViewPhonePipe],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input()
  user!: User

  @Output()
  public deleteUser = new EventEmitter<number>();

  @Output()
  public editUser = new EventEmitter<User>();

  readonly dialog = inject(MatDialog);
  private _snackBar = inject(MatSnackBar);


  public openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      data: {user: this.user}
    });

    dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
      if (result) {
        this.deleteUser.emit(this.user.id);
        this._snackBar.open('Пользователь удален', 'ok', {
          duration: 3000
        })
      } else {
        this._snackBar.open('Отмена удаления', 'ok', {
          duration: 3000
        })
      }
    });
  }

  public openEditDialog(): void {
    console.log('g')
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { user: this.user},
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(editResult => {
      console.log('The dialog was closed, значение формы:', editResult);
      if (editResult) {
        this.editUser.emit(editResult)
        this._snackBar.open('Пользователь редактирован', 'ok', {
          duration: 3000
        })
      } else {
        this._snackBar.open('Отмена редактирования', 'ok', {
          duration: 3000
        })
      }
    });
  }
}
