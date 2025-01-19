import { NgFor } from '@angular/common';
//import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { User } from '../models/User';
import { UsersApiSevice } from '../users-api.service';
import { UserCardComponent } from "./user-card/user-card.component";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiSevice);

  users: User[] = [];

  constructor() {
    this.usersApiService.getUsers().subscribe((res: User[]) => {
      this.users = res;
    });
  }

  deleteUsers(id: number) {
    this.users = this.users.filter((item) => item.id !== id);
  }
}
