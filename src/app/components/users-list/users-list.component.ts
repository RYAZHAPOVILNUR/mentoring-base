import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../../services/users-api.service';
import { User } from '../../interfaces/user.interface';
import { AsyncPipe, NgFor } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../../services/users.servece';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { CreateUser } from '../../interfaces/createUser.interface';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);

  constructor() {
    this.usersApiService.getUsers().subscribe((response: User[]) => {
      this.usersService.setUsers(response);
    });
  }

  public deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  public editUser(user: CreateUser) {
    this.usersService.editUser({
      ...user,
      company: {
        name: user.companyName,
      },
    });
  }

  public createUser(formData: CreateUser) {
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
}
