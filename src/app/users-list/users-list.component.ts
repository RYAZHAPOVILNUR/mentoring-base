import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, Injectable } from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user.card.component";
import { User } from "./user-interface";
import { UsersService } from "../users.service";


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  readonly UsersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);

  constructor() {
    this.UsersApiService.getUsers().subscribe(
      (response: User[]) => {
        this.usersService.setUsers(response);
      }
    )
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id)
  }

  getUserAuthor(id: number) {
//     const user = this.usersService.users.find(
//       user => user.id === id
//     )

//     if (!user) return

//     return user.name
  }
}




