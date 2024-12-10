import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {AsyncPipe, NgFor} from "@angular/common";
import {UsersApiService} from "../users-api.service";
import {UserCardComponent} from "./user-card/user-card.component";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  standalone: true,
  styleUrl: './users-list.component.scss',
  imports: [NgFor, UserCardComponent, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersListComponent {
  readonly userApiService = inject(UsersApiService);
  readonly userService = inject(UsersService);

  constructor() {
    this.userApiService.getUsers().subscribe(
      (response: any) => {
        this.userService.setUsers(response);
      }
    )
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id);
  }
}
