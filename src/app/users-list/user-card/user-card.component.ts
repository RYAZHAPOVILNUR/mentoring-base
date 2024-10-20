import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../interfaces/user.interface';
import { CreateEditUserDialogComponent } from '../create-edit-user-dialog/create-edit-user-dialog.component';
import { DeleteUserDialogComponent } from '../../delete-user-dialog/delete-user-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input()
  user!: User;

  @Output()
  deleteUser = new EventEmitter();

  @Output()
  editUser = new EventEmitter();

  readonly dialog = inject(MatDialog);

  readonly deleteDialog = inject(MatDialog);

  readonly snackbar = inject(MatSnackBar);

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateEditUserDialogComponent, {
      data: {user: this.user, isEdit: true},
    });

    dialogRef.afterClosed().subscribe(editResult => {
      console.log('The dialog was closed. Result:', editResult);
      if (editResult) {
        this.editUser.emit(editResult)
        this.snackbar.open(`Пользователь ${this.user.name} был изменен`, 'Ок', {
          duration: 3000
        })
      } 
    });
  }

  openDeleteDialog() {
    const dialogRef = this.deleteDialog.open(DeleteUserDialogComponent, {
      data: {user: this.user},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed. Result:', result);
      if (result) {
        this.deleteUser.emit(this.user.id)
        this.snackbar.open(`Пользователь ${this.user.name} был удален`, 'Ок', {
          duration: 3000
        })
      } else {
        this.snackbar.open('Отмена удаления', 'Ок', {
          duration: 3000
        })
      }
      
    });
  }

  
}
