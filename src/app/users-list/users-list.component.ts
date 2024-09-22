import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { IUser } from './user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: 'users-list.component.scss',
  standalone: true,
  imports: [NgFor],
})
export class UsersListComponent {
  readonly apiService = inject(HttpClient);

  users: IUser[] = [];

  constructor() {
    this.apiService
      .get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((response) => (this.users = response));
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
