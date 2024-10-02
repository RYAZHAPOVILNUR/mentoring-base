import { ChangeDetectionStrategy, Component, inject, Injectable } from "@angular/core";
import { AsyncPipe, NgFor} from '@angular/common';
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UserService } from "../user.service";
import { CreateUserFormComponent } from "../create-user-form/create-user-form.component";

export interface User {
  id: number;
  name: string;
  username?: string;
  email: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    }
  },
  phone?: string;
  website: string;
  company: {
    name: string;
    catchPhrase?: string;
    bs?: string;
}
}

export interface CreateUser {
  id: number;
  name: string;
  email: string;
  website: string;
  companyName: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe,CreateUserFormComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UserService);

  constructor() {
    this.usersApiService.getUsers().subscribe(
      (response: any) => {this.usersService.setUsers(response);
      }
    )
  }

  deleteUser (id: number) {
    this.usersService.deleteUser(id)
  }

  public createUser (formData: CreateUser) {
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