import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from "@angular/common/http";
import { Component, inject, Injectable } from "@angular/core";
import { User } from './user-interface'
import { RouterLink } from '@angular/router';
import { UsersApiService } from './users-api.service';
import { UserCardComponent } from "./user-card/user-card.component";

@Component({
      selector: 'app-users-list',
      standalone: true,
      imports: [NgFor, NgIf, RouterLink, UserCardComponent ], 
      templateUrl: './users-list.component.html',
      styleUrl: './users-list.component.scss',
})

export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService)
  users: User[] = [];

  constructor() {
    this.usersApiService.getUsers().subscribe(
      (response: any) => {
        this.users  = response;
        console.log('USERS:' , this.users)
      }
    )
  }
  deleteUser(id: number) {
    this.users = this.users.filter(
      item => item.id !== id
    )
  }

  
}