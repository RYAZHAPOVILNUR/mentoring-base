import { NgIf, NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, Injectable } from "@angular/core";

Injectable()


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor],
})
export class UsersListComponent {
  readonly apiService = inject(HttpClient);
  users: any[] = [];
  constructor() {
    this.apiService.get('https://jsonplaceholder.typicode.com/users').subscribe((response: any) => {
        this.users = response;
      }
    );
  }

  deleteUser(id: number) {
    this.users = this.users.filter (
        item => item.id !== id)
  }
}