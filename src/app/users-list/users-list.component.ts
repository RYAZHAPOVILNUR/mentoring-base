import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject} from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";


const consoleResponse = (response: unknown) => console.log(response) 

interface IUsers {
    id: number,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
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
    readonly usersApiService = inject(UsersApiService);
    users: IUsers[] = []


    deleteUser(id: number) {
        this.users = this.users.filter(
            item => item.id !== id
        )
    }

    constructor() {
        this.usersApiService.getUsers().subscribe(
            (response: any) => {
                this.users = response
                console.log(this.users)
            }
        )
    }
}