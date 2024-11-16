import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { UsersApiService } from '../services/users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { UserService } from '../services/user.service';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { CreateUser, User } from '../interfaces/user-interface';
import { ShadowForUser } from '../directives/user.directive';
import { StorageService } from '../services/local-storage.service';
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

  ngOnInit() {
    this.usersService.loadUsers();
  }

  deleteUser (id: number) {
    this.usersService.deleteUser(id);
  }

  editUser (user: User) {
    this.usersService.editUser(user);
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
  }
}  