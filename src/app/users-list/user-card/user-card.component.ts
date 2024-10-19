import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { UserInterface } from '../../interfaces/user-interfaces';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  standalone: true,
  imports: [MatIconModule, MatDialogModule],
})
export class UserCardComponent {

  // @Input() user_input: any - это входное свойство для получения данных
  @Input()
  user!: UserInterface;

  // @Output() — декоратор, используемый для создания событий
  @Output()
  // EventEmitter — это класс Angular, он же обработчик события который создает событие
  public deleteUser = new EventEmitter<number>(); // deleteUser_card используем в файле html и в файле html закидываем в круглые скобки(deleteUser_card)="здесь он будет вызывать другую переменную"

  @Output()
  public editUser = new EventEmitter<UserInterface>();

  readonly dialog = inject(MatDialog);
  
  public snackBar = inject(MatSnackBar);

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe((editResult) => {
      if (editResult) {
        this.editUser.emit(editResult);
        this.snackBar.open('Пользователь изменен!', 'Ok', {
          duration: 5000
        });
      } else {
        this.snackBar.open('Отмена измения !', 'Ok', {
          duration: 5000
        });
      }
    });
  }


  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
      if (result) {
        this.deleteUser.emit(this.user.id);
        this.snackBar.open('Пользователь удален!', 'Ok', {
          duration: 5000
        });
      } else {
        this.snackBar.open('Отмена удаления!', 'Ok', {
          duration: 5000
        });
      }
    });
  }
}
