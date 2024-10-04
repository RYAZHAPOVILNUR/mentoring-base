import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor]
})
export class UsersListComponent {
  title = 'mentoring-base';
  readonly apiServise = inject(HttpClient);
   users: any = [];

  constructor() {
    this.apiServise.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (response: any) => {
        this.users = response;
        console.log('USERS: ', this.users)
      }
    )
  }
  deleteUser(id: number) {
    this.users = this.users.filter(
      // @ts-ignore
      item => item.id !== id
    )
  }  
}  