import {Component, inject} from "@angular/core";
import {NgFor} from "@angular/common";
import {UsersApiService} from "../users-api.service";
import {UserCardComponent} from "./user-card/user-card.component";

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
        }
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  standalone: true,
  styleUrl: './users-list.component.scss',
  imports: [NgFor, UserCardComponent],
})

export class UsersListComponent {
  readonly userApiService = inject(UsersApiService);
  users: User[] = [];

  constructor() {
    this.userApiService.getUsers().subscribe(
      (response: any) => {
        this.users = response;
        console.log('USERS:', this.users)
      }
    )
  }
  deleteUser(id: number) {
    this.users = this.users.filter(
      item => {
        if (id === item.id) {
          return false
        } else {
          return true;
        }
      }
    )
  }
}
