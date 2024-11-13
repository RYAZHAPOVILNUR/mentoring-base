import { CommonModule, NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { User } from "./users-list.interface"; 

// const consoleResponse = (response: any) => console.log(response);


@Component({
    selector: 'app-user-list',
    templateUrl: './users-list.components.html',
    styleUrl: './users-list.components.scss',
    standalone: true,
    imports: [NgFor, CommonModule] ,
})
export class UserListComponent {
    readonly apiServis = inject(HttpClient);
    users: User[] = [];

    constructor() {
      this.apiServis.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(
          (response: User[]) => {
            this.users = response;
            console.log('USERS', this.users);
          }
        );
    }
  
    deleteUser(id: number) {
      this.users = this.users.filter(item => item.id !== id);
    }
}
