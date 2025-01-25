import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { User } from '../../interfaces/user.interface';
import { NotificationService } from '../../notification.service';
import { CustomUpperCasePipe } from '../../pipes/upper-case.pipes';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  standalone: true,
  imports: [CustomUpperCasePipe],
})
export class UserCardComponent {
  @Input({ required: true })
  user!: User;

  @Output()
  deleteUser = new EventEmitter();

  @Output()
  editUser = new EventEmitter();

  readonly dialog = inject(MatDialog);
  readonly notificatinService = inject(NotificationService);

  openDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe((editResult) => {
      console.log('МОДАЛКА ЗАКРЫЛАСЬ, ЗНАЧЕНИЕ ФОРМЫ: ', editResult);
      if (editResult) {
        this.editUser.emit(editResult);
        this.notificatinService.showNotification(
          'Пользователь отредактрирован!'
        );
      }
    });
  }

  onDeleteUser(userid: number) {
    this.deleteUser.emit(userid);
    this.notificatinService.showNotification('Пользователь удалён!');
  }
}
