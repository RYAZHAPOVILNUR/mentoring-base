import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { UsersApiService } from '../users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { UserService } from '../user.service';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { CreateUser, User } from '../interfaces/user-interface';
import { ShadowForUser } from '../directives/user.directive';
import { StorageService } from '../local-storage/local-storage.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe,CreateUserFormComponent, ShadowForUser],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UserService);
  readonly storageService = inject(StorageService);

  users: User[] = [];

  constructor() {
    this.users = this.storageService.getUsers();

    if (this.users.length === 0) {
      this.usersApiService.getUsers().subscribe(
        (response: User []) => {
          this.usersService.setUsers(response);
          this.storageService.saveUserList(response);
        });
    } else {
      this.usersService.setUsers(this.users);
    }
  }

  deleteUser (id: number) {
    this.usersService.deleteUser(id);
    this.updateLocalStorage();
  }

  editUser (user: User) {
    this.usersService.editUser(user);
    this.updateLocalStorage();
  }

  createUser (formData: CreateUser) {
    const newUser: User = {
      id: new Date().getTime(),
      name: formData.name,
      email: formData.email,
      website: formData.website,
      company: {
        name: formData.company.name,
      },
    };
    this.usersService.createUser(newUser);
    this.updateLocalStorage();
  }

  private updateLocalStorage (): void {
    this.usersService.getUsers().pipe(take(1)).subscribe((users: User[]) => {
      this.storageService.saveUserList(users);
    });
  }
}