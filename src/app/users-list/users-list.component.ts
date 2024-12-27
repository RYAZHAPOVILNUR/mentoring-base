import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}

@Component({
  selector: 'users-list-root',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor, RouterOutlet]
})
export class UsersListComponent {
  readonly apiService = inject(HttpClient);
  users: User[] = [];

  constructor() {
    this.apiService
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((res) => {
        this.users = res
      });
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user: any) => user.id !== id)
  }
}
