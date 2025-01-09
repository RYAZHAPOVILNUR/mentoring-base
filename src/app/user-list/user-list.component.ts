import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { UserService } from '../user.service';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly userService = inject(UserService);

  constructor() {
    this.usersApiService.getUsers().subscribe((users) => {
      this.userService.setUsers(users);
    });
  }

  createUser(formData: User) {
    this.userService.createUser({
      id: new Date().getTime(),
      name: formData.name,
      email: formData.email,
      website: formData.website,
      company: {
        name: formData.name,
      },
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id);
  }
}
