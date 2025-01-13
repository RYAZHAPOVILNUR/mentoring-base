import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersApiService } from '../users-api.service';
import { User } from '../interfaces/users.interface';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})

export class UserListComponent {
  usersApiService = inject(UsersApiService)
  usersList: User[] = []

  constructor() {
    this.usersApiService.getUsers().subscribe(users => 
      this.usersList = users
    )
  }

  deleteUser(id: number){
    this.usersList = [...this.usersList.filter(user => user.id !== id)]
  }
}
