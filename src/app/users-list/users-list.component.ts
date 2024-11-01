import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CreateUser, User } from '../interfaces/user-interfaces';
import { RouterLink } from '@angular/router';
import { UsersApiService } from '../services/users-services/users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../services/users-services/users.service';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink,
    UserCardComponent,
    AsyncPipe,
    CreateUserFormComponent,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss', 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);
  readonly dialog = inject(MatDialog);
  readonly snackBar = inject(MatSnackBar);
  readonly localStorageService = inject(LocalStorageService);  

  constructor() {
    this.loadUsers();
  }

  private loadUsers() {
    const storedUsers = this.localStorageService.getUsers(); 
    if (storedUsers) {
      this.usersService.setUsers(storedUsers);
    } else {
      this.usersApiService.getUsers().subscribe((response: any) => {
        this.usersService.setUsers(response);
        this.localStorageService.saveUsers(response); 
      });
    }
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
    this.updateLocalStorage();
  }

  editUser(user: User) {
    this.usersService.editUser(user);
    this.updateLocalStorage();
  }

  public createUser(formData: CreateUser) {
    const newUser: User = {
      id: new Date().getTime(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      website: formData.website,
      company: {
        name: formData.company.name,
      },
      isAdmin: false
    };

    this.usersService.createUser(newUser);
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    const users = this.usersService.getUsers();
    this.localStorageService.saveUsers(users); 
  }
}