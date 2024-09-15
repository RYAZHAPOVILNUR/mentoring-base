import { Component, inject, Injectable } from "@angular/core";
import { NgFor} from '@angular/common';
import { HttpClient } from "@angular/common/http";

const consoleResponse = (response: any) => console.log(response)

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  },
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
}
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})

export class UsersListComponent {
  readonly apiService = inject (HttpClient);
   users: User[] = [];

  constructor() {
    this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(
      (response: any) => {this.users = response;
      console.log('USERS: ', this.users)
      }
    )
  }

  deleteUser(id:number) {
    this.users = this.users.filter (
      (      item: { id: number; }) => item.id !== id
    )
  }
}