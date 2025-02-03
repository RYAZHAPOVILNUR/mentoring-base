import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { User } from '../users.component';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatDialogModule, MatSnackBarModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input()
  user!: User
  
  @Output()
  deleteUser = new EventEmitter<number>();

  @Output()
  editUser = new EventEmitter<User>();

  readonly dialog = inject(MatDialog);

  private snackBar = inject(MatSnackBar);

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      data: {user:this.user},
    });

    dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
      if (result) {
        this.deleteUser.emit(this.user.id)
        this.snackBar.open('Пользователь удален', 'Ok', {
          duration: 3000
        });
      
        console.log('Пользователь удален',this.user.id)
      }
  
      console.log(result)
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: {user:this.user},
    });
    dialogRef.afterClosed().subscribe(editResult => {
      console.log('МОДАЛКА ЗАКРЫЛАСЬ, ЗНАЧЕНИЕ ФОРМЫ:', editResult);
      if (editResult) {
        this.editUser.emit(editResult)
        this.snackBar.open('Пользователь отредактирован', 'Ok', {
          duration: 3000
        });
      } 
    });
  }
}