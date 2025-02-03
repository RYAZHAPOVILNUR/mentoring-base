import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, Injectable } from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { User } from "./user-interface";

 const consoleResponse = (response: unknown) => console.log(response);

 @Injectable()

@Component ({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor, UserCardComponent]
})

export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  users: User[] = [];

  constructor() {
      this.usersApiService.getUsers().subscribe(
      (response: any) => {
        this.users = response;
        console.log('USERS:', this.users);
      }
    )
  }
  deleteUser(id: number) {
    this.users = this.users.filter(

      users => {
        return id === users.id ? false : true;
      }
    )
  }
}
