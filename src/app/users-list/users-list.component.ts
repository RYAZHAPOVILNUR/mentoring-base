import {Component, inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {NgFor} from "@angular/common";
import {UserCardComponent} from "./user-card/user-card.component";
import {UsersService} from "../users-api.service";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

@Component({
  imports: [NgFor, UserCardComponent],
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  standalone: true,
})
export class UsersListComponent {
  readonly  apiService = inject(HttpClient);
  userService = inject(UsersService);
  users: User[] = []

  constructor() {
    this.userService.getData().subscribe(users => {
      this.users = (users);
    })
  }

  deleteUser(id: number){
    this.users = this.users.filter((user) =>  user.id !== id)
  }

}
