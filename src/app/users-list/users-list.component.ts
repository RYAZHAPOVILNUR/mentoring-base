import {Component, inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {NgFor} from "@angular/common";

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
  imports: [NgFor],
})

export class UsersListComponent {
  readonly apiService=inject(HttpClient);
  users: User[] = [];

  constructor() {
    this.apiService.get<User>('https://jsonplaceholder.typicode.com/users').subscribe(
      (response: any) => {
        this.users = response;
        console.log('USERS:', this.users)
      }
    )
  }
  deleteUser(id: number) {
    this.users = this.users.filter(

      item => item.id !== id
    )
  }
}
