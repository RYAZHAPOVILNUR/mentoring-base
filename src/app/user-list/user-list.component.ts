import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UsersApiService } from '../users-api.service';
import { User } from '../users-api.service';
import { UserCardComponent } from "./user-card/user-card.component";


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

    readonly usersApiService = inject(UsersApiService);
    users: User[] = [];
    
    constructor() {
		this.usersApiService.getUsers().subscribe(users => {
			this.users = users;
			console.log(this.users);
		});
    }

    deleteUser(id: number) {
      	this.users = this.users.filter(user => user.id !== id);
    }
}
