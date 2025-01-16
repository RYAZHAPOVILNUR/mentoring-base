import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    addres: {
        srteet: string;
        suete: string;
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
        catchPrase: string;
        bs: string;
    };
}

@Component ({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
    imports: [NgFor]

})
export class UsersListComponent {
    readonly apiService = inject(HttpClient);
    users: User[] = [];

    constructor() {
        this.apiService.get('https://jsonplaceholder.typicode.com/users').subscribe(
            (response: any) => {
                this.users = response;
                console.log('USERS: ', this.users)
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