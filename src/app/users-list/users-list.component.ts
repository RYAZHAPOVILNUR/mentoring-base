import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IUser } from './user.interface';
import { UsersApiService } from '../users-api.service';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: 'users-list.component.scss',
  standalone: true,
  imports: [NgFor, UserCardComponent],
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);

  users: IUser[] = [];

  constructor() {
    this.usersApiService
      .getUsers()
      .subscribe((response) => (this.users = response));
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
