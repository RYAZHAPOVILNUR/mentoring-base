import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../users.service';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { CreateUser, User } from '../interfaces/user-interface';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserDialogComponent } from './create-user-dialog/create-user-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-list',
  standalone: true,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  imports: [
    NgFor,
    UserCardComponent,
    AsyncPipe,
    CreateUserFormComponent,
    MatButtonModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  private _snackBar = inject(MatSnackBar);
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);
  readonly dialog = inject(MatDialog);

  constructor() {
    this.usersApiService.getUsers().subscribe((res: any) => {
      this.usersService.setUsers(res);
    });
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 3000 });
  }

  public deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  public createUser(formData: CreateUser) {
    this.usersService.createUser({
      id: new Date().getDate(),
      ...formData,
    });
  }

  public editUser(user: User) {
    this.usersService.editUser(user);
  }

  public openCreateUserDialog(): void {
    const dialogRef = this.dialog.open(CreateUserDialogComponent, {
      data: { users: this.usersService.getUsers },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.createUser(result);
        this.openSnackBar('Юзер создан!', 'ОК');
      } else {
        this.openSnackBar('Создание юзера отменено', '');
      }
    });
  }
}
