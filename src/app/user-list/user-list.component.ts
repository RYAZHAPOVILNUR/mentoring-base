import { NgFor } from "@angular/common";
import { Component, inject, Injectable } from "@angular/core";
import { UsersInterface } from "../users-interface";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";

@Component({
    selector: 'app-users-list',
    standalone: true,
    imports: [NgFor, UserCardComponent],
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.scss'
})


export class UsersListComponent {
    readonly usersApiService = inject(UsersApiService);
    users: UsersInterface[] = [];

    constructor() {
        this.usersApiService.getUsers().subscribe(
            (response: any) => {
                this.users = response;
            }
        )
    }
    
    deleteUser(id: number) {
        this.users = this.users.filter(
            item => item.id !== id
        )
    }
}