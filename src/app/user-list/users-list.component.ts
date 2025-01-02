import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, } from '@angular/core';
import { User } from '../user.interface.ts';
import { UsersApiService } from '../users-api.service.js';
import { UserCardComponent } from "./user-card/user-card.component";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})

export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  users: User[] = [];
  
  deleteUser (id:number) {
    this.users = this.users.filter(
      (item) => (item.id !== id)
    )
  }

  constructor() {
    this.usersApiService.getUsers().subscribe(
      (item) => this.users = item,
    );
  }
}
