import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, } from '@angular/core';
import { User } from '../user.interface.ts';
import { UsersApiService } from '../users-api.service.js';
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from '../users.service.js';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, UserCardComponent,AsyncPipe],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  usersService = inject(UsersService)
  
  deleteUser (id:number) {
    this.usersService.deleteUser(id)
  }

  constructor() {
    this.usersApiService.getUsers().subscribe(
      (item) => this.usersService.setUsers(item),
    );
  }
}
