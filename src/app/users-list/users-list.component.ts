import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { UsersApiService } from "../users-api.servise";
import { UserCardComponent } from "./user-card/user-card.component";

export interface Luser {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}
@Component ({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor, UserCardComponent]
})

export class UsersListComponent {
  readonly usersApiServise = inject(UsersApiService);
  users: Luser[] = [];

  constructor () {
    this.usersApiServise.getUsers().subscribe(
      (response: Object) => {
        this.users = response as Luser[];
      }
    )
  }
  deleteUser (id: number) {
    this.users = this.users.filter(
      user => {
        if (id === user.id) {
           return false;
          } else {
            return true;
        }
      }
    )
  }
}
