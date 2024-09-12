import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from "@angular/common/http";
import { Component, inject, Injectable } from "@angular/core";
import { User} from './user-interface'

@Component({
      selector: 'app-users-list',
      standalone: true,
      imports: [NgFor, NgIf], 
      templateUrl: './users-list.component.html',
      styleUrl: './users-list.component.scss',
})

export class UsersListComponent {
  readonly apiServise = inject(HttpClient);
  users: User[] = [];

  constructor() {
    this.apiServise.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(
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