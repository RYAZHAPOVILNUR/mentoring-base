import { Component, inject, Injectable } from "@angular/core";
import { NgFor} from '@angular/common';
import { HttpClient } from "@angular/common/http";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";

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
  imports: [NgFor, UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})

export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
   users: User[] = [];
 
  constructor() {
    this.usersApiService.getUsers().subscribe(
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