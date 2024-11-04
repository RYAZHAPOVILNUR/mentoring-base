import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";
import { CreateUserFormComponent } from "../create-user-form/create-user-form.component";

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
  id: number,
  name: string,
  email: string,
  website: string,
  company: {
    name: string
  }
}

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    UserCardComponent,
    AsyncPipe,
    CreateUserFormComponent,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService)
  constructor() {
    this.usersApiService.getUsers().subscribe(
      (response: any) => {
        this.usersService.setUsers(response)
      }
    )
    this.usersService.users$.subscribe((users) => console.log(users))
  }

  deleteUser(id:number) {
    this.usersService.deleteUser(id);
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
    })
      console.log("ДАННЫЕ ФОРМЫ", user);
    console.log(new Date().getTime())

  }
}
