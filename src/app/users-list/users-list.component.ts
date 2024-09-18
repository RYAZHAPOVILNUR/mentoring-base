import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Comment } from "@angular/compiler";
import { Component, inject, Injectable } from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";

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
    imports: [NgFor, UserCardComponent],
    standalone: true
})
export class UsersListComponent {
    readonly usersApiServis = inject(UsersApiService);
    
    users: User[] = [];

        constructor() {
        this.usersApiServis.getUsers().subscribe(
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