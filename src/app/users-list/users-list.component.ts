import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";

export interface User {
    id: number;
    name: string;
    email: string;
    company: {
        name: string
    };
    website: string
}

@Component({
    selector: 'app-users-list',
    standalone: true,
    imports: [NgFor],
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
    readonly apiService = inject(HttpClient);
    users: User[] = [];

    constructor() {
        this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(
            (response) => {
                this.users = response;
                console.log(this.users);
            }
        );
    }

    deleteUser(id: number) {
        this.users = this.users.filter((user) => id === user.id ? false : true)
    }
}