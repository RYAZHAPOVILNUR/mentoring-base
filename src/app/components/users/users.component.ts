import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { UsersApiService } from '../../users-api.service';
import { UserCardComponent } from './user-card/user-card.component';
import { User } from './user-interface';



@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor, UserCardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  readonly usersApiService = inject(UsersApiService);
  users: User[] = [];

  constructor() {
    this.usersApiService.getUsers().subscribe((response: User[]) => {
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
