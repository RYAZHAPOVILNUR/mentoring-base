import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersApiService } from '../users-api.service';
import { UsersService } from '../users.service';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../interfaces/users.interface';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent, ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})

export class UserListComponent {
  usersApiService = inject(UsersApiService)
  usersService = inject(UsersService)
  users$ = this.usersService.users$

  constructor() {
    this.usersApiService.getUsers().subscribe(users => 
      this.usersService.setUsers(users)
    )
  }

  createUser(formData: User){
    this.usersService.createUser(formData)
    console.log("🚀 ~ UserListComponent ~ createUser ~ formData:", formData)
  }

  deleteUser(id: number){
    this.usersService.deleteUser(id)
  }
}
