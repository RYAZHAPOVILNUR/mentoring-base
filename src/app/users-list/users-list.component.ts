import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { UsersApiService } from "../users-api.servise";
import { UserCardComponent } from "./user-card/user-card.component";


@Component ({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor, UserCardComponent]
})

export class UsersListComponent {
  readonly usersApiServise = inject(UsersApiService);
  users: any = [];

  constructor () {
    this.usersApiServise.getUsers().subscribe(
      (response: any) => {
        this.users = response;
        console.log('Users:', this.users);
      }
    )
  }
  deleteUser (id: number) {
    this.users = this.users.filter(
      // @ts-ignore
      item => {
        if (id === item.id) {
           return false;
          } else {
            return true;
        }
      }
    )
  }
}

