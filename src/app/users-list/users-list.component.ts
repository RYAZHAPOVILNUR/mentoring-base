import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { User } from '../models/User';
import { UsersApiSevice } from '../services/users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../services/users.service';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiSevice);
  readonly usersService = inject(UsersService);

  constructor() {
    this.usersApiService.getUsers().subscribe((res: User[]) => {
      this.usersService.setUsers(res);
    });

    this.usersService.users$.subscribe(user => console.log(user))
  }

  deleteUsers(id: number) {
    this.usersService.deleteUser(id);
  }
  public createUser(formData: any) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: formData.name,
      email: formData.email,
      company: {
        name: formData.companyName
      },
      website: formData.website
    });
  }
}
