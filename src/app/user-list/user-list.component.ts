import { ChangeDetectionStrategy, Component, inject, Injectable } from "@angular/core";
import { AsyncPipe, NgFor} from '@angular/common';
import { HttpClient } from "@angular/common/http";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UserService } from "../user.service";


const consoleResponse = (response: any) => console.log(response)

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  },
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
}
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UserService);
  // users = this.usersService;

  constructor() {
    this.usersApiService.getUsers().subscribe(
      (response: any) => {this.usersService.setUsers(response);
      }
    )

    // this.usersService.userSubject.subscribe(
    // user => this.users = this.users
    // )
  }

  deleteUser (id: number) {
    this.usersService.deleteUser(id)
  }
}