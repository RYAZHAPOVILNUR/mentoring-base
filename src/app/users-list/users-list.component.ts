import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, Injectable } from "@angular/core";
import { RouterLink } from "@angular/router";
import { User } from "./user-interface";


@Component ({
    selector: 'app-users-list', 
    templateUrl: './users-list.component.html', 
    styleUrl: './users-list.component.scss',
    standalone: true,  
    imports: [NgFor]
})



export class UsersListComponent {
    readonly apiService = inject(HttpClient); 
    users: User[] = []; 

    constructor() {
        this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(
            (response:User[]) => {
                this.users = response;
                console.log('USERS: ', this.users) 
            }
        )
    }
}
