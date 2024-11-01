import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../../../services/users-api-service';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../../../services/users.service';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { User, UserForm } from './user-interface';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserDialogComponent } from '../create-user-form/create-user-dialog/create-user-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);

  constructor() {
      this.loadUsersFromLocalStorage();
  }

  private loadUsersFromLocalStorage() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.usersService.setUsers(JSON.parse(storedUsers));
    } else {
      this.usersApiService.getUsers().subscribe((response: any) => {
        this.usersService.setUsers(response);
        this.saveUsersToLocalStorage(response);
      });
    }
  }

  private saveUsersToLocalStorage(users: User[]) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
    this.updateLocalStorage();
  }

  editUser(user: UserForm) {
    this.usersService.editUser({
      ...user,
      company: {
        name: user.companyName,
      },
    });

    this.updateLocalStorage();
  }

  public createUser(formData: UserForm) {
    const newUser: User = {
      id: new Date().getTime(),
      name: formData.name,
      email: formData.email,
      website: formData.website,
      company: {
        name: formData.companyName,
      },
    };
    this.usersService.createUser(newUser);
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    const users = this.usersService.getUsers();
    this.saveUsersToLocalStorage(users)
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
