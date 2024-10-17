import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";

export interface IUser {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
    imports: [NgFor, UserCardComponent]
})
export class UsersListComponent {
    readonly usersApiServise = inject(UsersApiService);
    users: IUser[] = [];

    constructor() {
        this.usersApiServise.getUsers().subscribe(
            (response: any) => {
                this.users = response
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
    
