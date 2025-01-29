import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, Injectable } from "@angular/core";

export interface Users {
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
    standalone: true,
    imports: [NgFor],
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.scss'
})


export class UsersListComponent {
    readonly ApiService = inject(HttpClient);
    users: Users[] = [];

    constructor() {
        this.ApiService.get('https://jsonplaceholder.typicode.com/users').subscribe(
            (response: any) => {
                this.users = response;
                console.log('USERS:', this.users)
            }
        )
    }

    deleteUser(id: number) {
        this.users = this.users.filter(
            item => item.id !== id
        )
    }
}