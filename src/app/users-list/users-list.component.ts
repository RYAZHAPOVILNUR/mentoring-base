import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
}
@Injectable()
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor],
})
export class UsersListComponent {
  readonly apiService = inject(HttpClient);
  users: User[] = [];

  constructor() {
    this.apiService
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((response) => {
        this.users = response;
        console.log('USERS:', this.users);
      });
  }

  deleteUser(id: number) {
    this.users = this.users.filter(
      //  @ts-ignore
      (item) => item.id !== id
    );
  }
}
