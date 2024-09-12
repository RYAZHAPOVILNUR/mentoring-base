import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Comment } from "@angular/compiler";
import { Component, inject, Injectable } from "@angular/core";

// @Injectable()
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    imports: [NgFor],
    standalone: true
})
export class UsersListComponent {
    readonly apiService = inject(HttpClient);
    users: User[] = [];

        constructor() {
        this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(
            (response: any) => {
                this.users = response;
                console.log('Users:', this.users)
            }
        )
    }

    deleteUser(id: number) {
        this.users = this.users.filter(
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