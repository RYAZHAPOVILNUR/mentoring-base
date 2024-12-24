import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, Injectable } from "@angular/core";
import { RouterLink } from "@angular/router";
import { User } from "./user-interface";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";


@Component ({
    selector: 'app-users-list', 
    templateUrl: './users-list.component.html', 
    styleUrl: './users-list.component.scss',
    standalone: true,  
    imports: [NgFor, UserCardComponent]
})



export class UsersListComponent {
    readonly usersApiService = inject(UsersApiService); 
    users: User[] = []; 

    constructor() {
        this.usersApiService.getUsers() .subscribe(
            (response: any) => {
                this.users = response;
                console.log('USERS: ', this.users) 
            }
        )
    }

    deleteUser(id:number) {
        this.users = this.users.filter(
            item => {
                if (id === item.id) {
                    return false; 
                }
                else {
                    return true;
                }
            }
        )
    }
}
