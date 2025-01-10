import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})

export class UserListComponent {
  private apiService = inject(HttpClient)

  usersList: User[] = []
  constructor() {
    this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(users => 
        this.usersList = users
    )
  }

  deleteUser(id: number){
    this.usersList = [...this.usersList.filter(user => user.id !== id)]
  }
}
