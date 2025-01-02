import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

export interface User {
  name: string;
  id: number;
  email?: string;
  phone?: string;
  username?: string;
  website?: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {


    readonly apiService = inject(HttpClient);
    users: User[] = [];
    
    constructor() {
      this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(users => {
        this.users = users;
        console.log(this.users);
      });
    }

    deleteUser(id: number) {
      this.users = this.users.filter(user => user.id !== id);
    }
}
