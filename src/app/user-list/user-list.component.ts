import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersApiService } from '../users-api.service';
import { UsersService } from '../users.service';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../interfaces/users.interface';
import { take } from 'rxjs';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent, ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UserListComponent implements OnInit {
  usersApiService = inject(UsersApiService)
  usersService = inject(UsersService)
  users$ = this.usersService.users$

  ngOnInit(): void {
    this.usersApiService
      .getUsers()
      .pipe(take(1))
      .subscribe((users) => this.usersService.setUsers(users));
  }

  createUser(formData: User){
    this.usersService.createUser(formData)
    console.log("🚀 ~ UserListComponent ~ createUser ~ formData:", formData)
  }

  deleteUser(id: number){
    this.usersService.deleteUser(id)
  }
}
