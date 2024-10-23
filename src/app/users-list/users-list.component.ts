import { NgIf, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable } from '@angular/core';

Injectable();

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
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((response: any) => {
        this.users = response;
      });
  }

  deleteUser(id: number) {
    this.users = this.users.filter((item) => item.id !== id);
  }
}
export interface User {
  id: number;
  name: string;
  username: string;
  website: string;
  email: string;
  company: {
    name: string;
  };
}
