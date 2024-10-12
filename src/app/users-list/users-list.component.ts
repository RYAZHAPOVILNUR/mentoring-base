import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../users.service';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';

export interface User {
  id: number;
  name: string;
  username?: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website: string;
  company: {
    name: string;
    catchPhrase?: string;
    bs?: string;
  };
}

interface UserFormData {
  name: string;
  email: string;
  website: string;
  companyName: string;
}

@Component({
  selector: 'app-users-list',
  standalone: true,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);

  constructor() {
    this.usersApiService.getUsers().subscribe((res: any) => {
      this.usersService.setUsers(res);
    });
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  createUser(formData: UserFormData) {
    this.usersService.createUser({
      id: new Date().getDate(),
      name: formData.name,
      email: formData.email,
      website: formData.website,
      company: {
        name: formData.companyName,
      },
    });
  }
}
