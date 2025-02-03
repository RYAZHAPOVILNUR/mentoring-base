import { NgFor, NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { UsersApiService } from "../users-api.service";
import { UsersCardComponent } from "./user-card/user-card.component";

export interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  adress: {
     street: string;
     suite: string;
     city: string;
     zipcode: string;
     geo:    {
        lat: string;
        lng: string;
        };
     };
  phone: string;
  website: string;
  company:  {
      name: string;
      catchPhrase: string;
      bs: string;
     };
}

@Component({
     selector: 'app-users-list',
     templateUrl: './users-list.component.html',
     styleUrl: './users-list.component.scss',
     standalone: true,
     imports: [NgFor, UsersCardComponent]
})

export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  users: Users[] = [];

  constructor() {
    this.usersApiService.getUsers().subscribe(
      (response: any) => {
         this.users = response;
         console.log('USERS: ', this.users)
         }
      )
   }

   deleteUser(id: number) {
     this.users = this.users.filter(
        item =>{
          if (id === item.id) {
             return false}
             else {return true}
        }
     )
   }
}
