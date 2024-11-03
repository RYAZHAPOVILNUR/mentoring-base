import { AsyncPipe, KeyValuePipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../../../services/users.service';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { User, UserForm } from './user-interface';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserDialogComponent } from '../create-user-form/create-user-dialog/create-user-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { LocalStorageService } from '../../../services/local-storage.service';
import { UsersApiService } from '../../../usersApi.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [
    NgFor,
    UserCardComponent,
    AsyncPipe,
    CreateUserFormComponent,
    CreateUserDialogComponent,
    MatCardModule,
    KeyValuePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly localStorage = inject(LocalStorageService);
  readonly usersService = inject(UsersService);
  readonly userApiService = inject(UsersApiService);

  constructor() {
    this.loadTodos()
  }

  loadTodos() {
    const localStorageUsers = this.localStorage.getUsersFromLocalStorage();

    if (localStorageUsers) {
      this.usersService.setUsers(localStorageUsers);
    }
    this.userApiService.getUsers().subscribe((data) => {
      this.usersService.setUsers(data)
      this.localStorage.saveUsersToLocalStorage(data);
    });
  }


  public createUser(formData: UserForm) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: formData.name,
      email: formData.email,
      website: formData.website,
      company: {
        name: formData.companyName,
      },
    });
  }

  public editUser(user: UserForm) {
    this.usersService.editUser({
      ...user,
      company: {
        name: user.companyName,
      },
    });
  }

  public deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  readonly dialogTwo = inject(MatDialog);

  createUserDialog(): void {
    const dialogRef = this.dialogTwo.open(CreateUserDialogComponent, {
      data: { user: this.usersService.users$ },
    });

    dialogRef.afterClosed().subscribe((createResult: UserForm) => {
      if (createResult) {
        this.createUser(createResult);
        this.openSnackBarTwo();
      }
    });
  }

  readonly snackBar = inject(MatSnackBar);

  readonly snackBarCreate = inject(MatSnackBar);

  openSnackBarTwo(): void {
    this.snackBar.open('Пользователь создан🐒', 'Закрыть', {
      duration: 2000,
    });
  }
}
