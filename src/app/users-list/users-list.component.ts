import { AsyncPipe, NgFor } from '@angular/common';
//import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { User } from '../models/User';
import { UsersApiSevice } from '../services/users-api.service';
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiSevice);
  readonly usersService = inject(UsersService)


  constructor() {
    this.usersApiService.getUsers().subscribe((res: User[]) => {
      this.usersService.setUsers(res)
    });
  }

  deleteUsers(id: number) {
    this.usersService.deleteUser(id)
  }
}
