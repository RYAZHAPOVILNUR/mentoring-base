import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { UserApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";


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
    imports: [NgFor, UserCardComponent, AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
    }
)

export class UsersListComponent {
    readonly apiService = inject(UserApiService);
    readonly usersService = inject(UsersService);
    

    constructor(){
        this.apiService.getUsers().subscribe(
            (response: any) => {
                this.usersService.setUsers(response)
            }
        )

        // this.usersService.usersSubject.subscribe(
        //     users => this.users = users
        // )
    }

    deleteUser(id: number){
        this.usersService.deleteUser(id)
    }
}