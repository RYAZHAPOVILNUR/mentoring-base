import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { RouterLink,  } from "@angular/router";
import { User } from "./user__interface";



@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
    imports: [NgFor, RouterLink, ],
})

export class UsersListComponent {
    readonly apiService = inject(HttpClient);

    users: User[] = [];

    constructor() {
        this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(
            (response: any) => {
                this.users = response;
                console.log('USERS: ', this.users);
            }
        )
    }

    deleteUser(id: number) {
        this.users = this.users.filter(
            //ts.ignore-completed
            item => {
                if (id === item.id) {
                    return false
                } else {
                    return true
                }
            }
        )
    }
}