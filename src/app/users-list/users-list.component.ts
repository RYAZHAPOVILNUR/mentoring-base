import { Component, inject, Injectable } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from "@angular/router";
import { NgFor } from "@angular/common";
import { UserApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { User,} from "./users-interface";

@Component({
    selector: 'app-users-list',
    imports: [HeaderComponent, RouterLink, NgFor, UserCardComponent,],
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
    readonly usersApiService = inject(UserApiService)
    users: User[] = []

    constructor() {
        this.usersApiService.getUsers().subscribe(
            (response: User[]) => {
                this.users = response;
            }
        )
    }
    
    deleteUser(id: number){
        this.users = this.users.filter(
            user => user.id !== id
        )
    }
}