import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

export interface User {
  id:             number;
  name:           string;
  username:       string;
  email:          string;
  address: {
    street:       string;
    suite:        string;
    zipcode:      string;
    city:         string;
    geo: {
      lat:        string;
      lng:        string;
    };
  };
  phone:          string;
  website:        string;
  company: {
    bs:           string;
    catchPhrase:  string;
    name:         string;
  };
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor],
})
export class UsersListComponent {
  title = 'mentoring-base';
  readonly apiServise = inject(HttpClient);
  users: User[] = [];

  constructor() {
    this.apiServise.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((response: any) => {
        this.users = response;
        console.log('USERS: ', this.users);
      });
  }
  deleteUser(id: number) {
    this.users = this.users.filter((item) => item.id !== id);
  }
}
