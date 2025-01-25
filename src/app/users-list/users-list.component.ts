import { NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import { UserApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";


export interface User {
    id: number;
    name: string;
    username: string;
    email:  string;
    adress: {
        street: string;
        suit: string;
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


@Component(
    {
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
    imports: [NgFor, UserCardComponent]
    }
)

export class UsersListComponent {
    readonly apiService = inject(UserApiService);
    users: User[] = [];

    constructor(){
        this.apiService.getUsers().subscribe(
            (response: any) => {
                this.users = response;
                console.log('USERS:', this.users)
            }
        )
    }

    deleteUser(id: number){
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