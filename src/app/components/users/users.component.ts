import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

const apiservise = '';

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
    catchphrase: string;
    bs: string;
  };
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  readonly apiservise = inject(HttpClient);

  users: User[] = [];

  constructor() {
    this.apiservise
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((response: any) => {
        this.users = response;
        console.log('USERS:', this.users);
      });
  }

  deleteUser(id: number) {
    this.users = this.users.filter((item) => {
      if (id === item.id) {
        return false;
      } else {
        return true;
      }
    });
  }
}
