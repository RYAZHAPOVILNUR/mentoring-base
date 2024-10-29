import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../services/users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { usersService } from '../services/users.service';
import { User } from '../interfaces/user.interface';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateEditUserDialogComponent } from './create-edit-user-dialog/create-edit-user-dialog.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(usersService);

  readonly dialog = inject(MatDialog);

  readonly deleteDialog = inject(MatDialog);

  readonly snackbar = inject(MatSnackBar);

  constructor() {
    this.usersApiService.getUsers().subscribe((responce: any) => {
      this.usersService.setUsers(responce);
    });
  }

  editUser(user: User) {
    this.usersService.editUser(user);
  }

  openDialog(user?: User): void {
    let isEdit = false;
    if (user) {
      isEdit = true;
    }
    

    const dialogRef = this.dialog.open(CreateEditUserDialogComponent, {
      data: {
        isEdit,
        user: user,
      },
    });
    console.log('dialog')

    dialogRef.afterClosed().subscribe((user) => {
      if (isEdit && user) {
        this.usersService.editUser(user);
        this.snackbar.open(`Пользователь ${user.name} был изменен`, 'Ок', {
          duration: 3000,
        });
      } else if (!isEdit && user) {
        this.usersService.createUser(user);
        this.snackbar.open(`Пользователь ${user.name} был создан`, 'Ок', {
          duration: 3000,
        });
      }
    });
  }

  openDeleteDialog(user: User) {
    const dialogRef = this.deleteDialog.open(DeleteUserDialogComponent, {
      data: { user: user },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed. Result:', result);
      if (result) {
        this.usersService.deleteUser(user.id);
        this.snackbar.open(`Пользователь ${user.name} был удален`, 'Ок', {
          duration: 3000,
        });
      } else {
        this.snackbar.open('Отмена удаления', 'Ок', {
          duration: 3000,
        });
      }
    });
  }
}
