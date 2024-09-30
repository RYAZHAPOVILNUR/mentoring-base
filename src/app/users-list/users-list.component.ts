import { AsyncPipe, NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Comment } from "@angular/compiler";
import { ChangeDetectionStrategy, Component, inject, Injectable } from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";
import { CreateUserFormComponent } from "../create-user-form/create-user-formcomponent";

// @Injectable()
export interface User {
    id: number;
    name: string;
    username?: string;
    email: string;
    address?: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone?: string;
    website: string;
    company: {
        name: string;
        catchPhrase?: string;
        bs?: string;
    };
}

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
    readonly usersApiServis = inject(UsersApiService);
    readonly usersService = inject(UsersService);

    constructor() {
        this.usersApiServis.getUsers().subscribe(
            (response: any) => {
                this.usersService.setUsers(response);
            }
        )
    }

    deleteUser(id: number) {
        this.usersService.deleteUsers(id)
    }  
    
    createUser(formData: any) {
        this.usersService.createUsers(
            {
                id: new Date().getTime(),
                name: formData.name,
                email: formData.email,
                website: formData.website,
                company:{
                    name: formData.companyName,
                }
            }
        )
    }
}