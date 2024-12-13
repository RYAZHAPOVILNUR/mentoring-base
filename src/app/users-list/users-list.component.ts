import { NgFor, AsyncPipe } from '@angular/common';

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Injectable,
} from '@angular/core';
import { UsersApiService } from './users-api-service';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from './users.service';
import { TodosApiService } from '../todos-list/todos-api.service';
import { CreateUserFormComponent } from '../components/create-user-form/create-user-form.component';

Injectable();

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
  readonly usersService = inject(UsersService);
  readonly todosApiService = inject(TodosApiService);
  users$ = this.usersService.users$;

  constructor() {
    this.usersApiService.getUsers().subscribe((response: any) => {
      this.usersService.setUsers(response);
    });
  }
  
  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }
  editUser(user: User) {
    this.usersService.editUser(
      user
    );
  }
  public createUser(user: CreateUser) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: user.name,
      email: user.email,
      website: user.website,
      company: {
        name: user.company.name,
      },
    });
    console.log('Данные формы:');
    console.log(new Date().getTime());
  }
}

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

export interface CreateUser {
  id: number;
  name: string;
  email: string;
  website: string;
  company: {
    name: string;
  };
}
