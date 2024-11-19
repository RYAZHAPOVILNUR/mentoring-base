import { CommonModule, NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { User } from "./users-list.interface"; 
import { UsersApiService } from "../users-api.service";
import { UserListCardComponent } from "./user-list-card/user-list-card.component";

// const consoleResponse = (response: any) => console.log(response);


@Component({
    selector: 'app-user-list',
    templateUrl: './users-list.components.html',
    styleUrl: './users-list.components.scss',
    standalone: true,
    imports: [NgFor, CommonModule, UserListCardComponent] ,
})
export class UserListComponent {
    readonly usersApiService = inject(UsersApiService);
    users: User[] = [];


    constructor() {
      this.usersApiService.getUsers().subscribe(
          (response: User[]) => {
            this.users = response;
            console.log('USERS', this.users);
        });
      
    }deleteUser(id: number) {
      this.users = this.users.filter(item => item.id !== id);
    }
}
