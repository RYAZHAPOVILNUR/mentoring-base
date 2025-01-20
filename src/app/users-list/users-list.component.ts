import { AsyncPipe, NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { UsersApiService } from "../users-api.servise";
import { UserCardComponent } from "./user-card/user-card.component";
import { ChangeDetectionStrategy } from "@angular/core";
import { UsersService } from "../users.service";
import { User } from "./user";

@Component ({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersListComponent {
  readonly usersApiServise = inject(UsersApiService);
  readonly usersService = inject(UsersService);

  constructor () {
    this.usersApiServise.getUsers().subscribe(
      (response: User[]) => {
        this.usersService.setUsers(response);
      }
    )
  }

  deleteUser (id: User) {
    this.usersService.deleteUser(id)
  }
}
