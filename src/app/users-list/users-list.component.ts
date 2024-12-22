import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, Injectable } from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user.card.component";
import { User } from "./user-interface";


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor, UserCardComponent]
})
export class UsersListComponent {
  readonly UsersApiService = inject(UsersApiService);
  users: User[] = [];

  constructor() {
    this.UsersApiService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
        console.log('USERS:', this.users);
      }
    )
  }

  deleteUser(id: number) {
    this.users = this.users.filter(
      user => {
        if (id === user.id) {
          return false
        } else {
          return true
        }
      }
    )
  }
}
