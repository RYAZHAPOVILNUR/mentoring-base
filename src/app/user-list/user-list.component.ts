import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersApiService } from '../users-api.service';
import { User } from '../interfaces/users.interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})

export class UserListComponent {
  usersApiService = inject(UsersApiService)
  usersService = inject(UsersService)

  constructor() {
    this.usersApiService.getUsers().subscribe(users => 
      this.usersService.setUsers(users)
    )
  }

  deleteUser(id: number){
    this.usersService.deleteUser(id)
  }
}
