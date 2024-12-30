import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})

export class UsersListComponent {
  readonly apiServer = inject(HttpClient);
  users: User[] = [];
  
  deleteUser (id:number) {
    this.users = this.users.filter(

      (item) => item.id !== id
    )
  }

  constructor() {
    this.apiServer
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((item) => this.users = item);
  }
}
