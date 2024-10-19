import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../services/users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { usersService } from '../services/users.service';
import { CreateUserFormComponent } from '../create-user/create-user-form.component';
import { User } from '../interfaces/user.interface';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(usersService);

  constructor() {
    this.usersApiService.getUsers().subscribe((responce: any) => {
      this.usersService.setUsers(responce);
    });
  }

 editUser(user: User) {
    this.usersService.editUser(user);
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  CreateUser(FormData: User) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: FormData.name,
      email: FormData.email,
      phone: FormData.phone,
      website: FormData.website,
    });
  }
}


