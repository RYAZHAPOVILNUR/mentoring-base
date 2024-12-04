import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { User } from '../users-list.interface';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-list-card',
  standalone: true,
  imports: [],
  templateUrl: './user-list-card.component.html',
  styleUrl: './user-list-card.component.scss'
})
export class UserListCardComponent {
  @Input()
  user!: User;
  readonly dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  
  @Output()
  editUser = new EventEmitter()

  openDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: {user: this.user},
    });

    dialogRef.afterClosed().subscribe((editResult) => {
      if (editResult) {
        console.log('editResult:', editResult)
        this.editUser.emit(editResult);
        this.snackBar.open('Пользователь успешно обновлен', 'Закрыть', {
          duration: 3000,
        });
      } else {
        this.snackBar.open('Отмена редактирования',  'Закрыть', {
          duration: 3000,
        });
      }
    })

  }
  
  @Output()
  deleteUser = new EventEmitter()

  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId)
  }
}
