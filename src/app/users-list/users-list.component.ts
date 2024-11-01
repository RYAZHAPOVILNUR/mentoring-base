import { NgIf, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable } from '@angular/core';
import { UsersApiService } from './users-api-service';
import { UserCardComponent } from './user-card/user-card.component';


Injectable();

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor, UserCardComponent],
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  users: User[] = [];
  constructor() {
    this.usersApiService.getUsers().subscribe((response: any) => {
      this.users = response;
    });
  }

  deleteUser(id: number) {
    this.users = this.users.filter((item) => item.id !== id);
  }
}
export interface User {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address: {
        street: string;
        suite:  string;
        city:   string;
        zipcode:string;
        geo: {
        lat:    string;
        lng:    string;
        };
    };
    phone:    string;
    website:  string;
    company: {
        name:        string;
        catchPhrase: string;
        bs:          string;
  };
}
