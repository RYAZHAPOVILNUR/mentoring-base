import { AsyncPipe, NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, Injectable } from "@angular/core";
import { usersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";
import { ChangeDetectionStrategy } from "@angular/core";
import { CreateUserFormComponent } from "../create-user-form/create-user-form.component";


export interface User {
    id: number; 
    name: string;
    username?: string;
    email: string;
    address?: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
         lat: string;
         lng: string;
        };
    };
    phone?: string;
    website: string;
    company: {
        name: string;
        catchPhrase?: string;
        bs?: string;
    };
}


@Component({
 selector: 'app-users-list',
 templateUrl: './users-list.component.html',
 styleUrl: './users-list.component.scss',
 standalone: true , 
 imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent],
 changeDetection: ChangeDetectionStrategy.OnPush
})


export class UsersListComponent {
readonly UsersApiService = inject(usersApiService)
readonly usersService = inject(UsersService)
users$ = this.usersService.users$
constructor() {
    this.UsersApiService.getUsers().subscribe(
        (Response:any) => {
            this.usersService.setUsers(Response);
            this.users$ = this.usersService.users$
        }
    )
    this.usersService.users$.subscribe()
}
      deleteUser(id: number) {
        this.usersService.deleteUser(id)
        this.users$ = this.usersService.users$
      } 
     public createUser(formData: any) {
        this.usersService.creatUser({
          id: new Date().getTime(),
          name: formData.name,
          email: formData.email,
          website: formData.website,
          company: {
            name: formData.companyName
          }
        })
      }
      
}