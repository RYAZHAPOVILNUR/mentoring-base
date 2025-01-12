import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  adress: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  readonly apiService = inject(HttpClient);
  users: User[] = [];

  constructor() {
    this.apiService
      .get<Array<User>>('https://jsonplaceholder.typicode.com/users')
      .subscribe((res) => {
        this.users = res;
      });
  }

  deleteUsers(id: number) {
    this.users = this.users.filter((item) => item.id !== id);
  }
}
