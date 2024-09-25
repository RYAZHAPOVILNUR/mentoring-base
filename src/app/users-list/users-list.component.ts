import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, Component, inject, Injectable } from "@angular/core";
import { User } from './user-interface'
import { RouterLink } from '@angular/router';
import { UsersApiService } from './users-api.service';
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from '../users.service';

@Component({
      selector: 'app-users-list',
      standalone: true,
      imports: [NgFor, NgIf, RouterLink, UserCardComponent , AsyncPipe], 
      templateUrl: './users-list.component.html',
      styleUrl: './users-list.component.scss',
      changeDetection: ChangeDetectionStrategy.OnPush

})

export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);

  constructor() {
    this.usersApiService.getUsers().subscribe(
      (response: any) => {
        this.usersService.setUsers(response);
      }
    )
  }

  deleteUser(id: number) {
  this.usersService.deleteUser(id)
  }
}