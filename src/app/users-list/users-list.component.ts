import { HttpClient } from "@angular/common/http";
import { Component, inject, Injectable } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from "@angular/router";
import { NgFor } from "@angular/common";

export interface User {
    id: number;
    name: string;
    email: string;
    website: string;
    company: {
        name: string;
    }
}
Injectable()

@Component({
    selector: 'app-users-list',
    imports: [HeaderComponent, RouterLink, NgFor],
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
    readonly apiService = inject(HttpClient)
    users: User[] = []

    constructor() {
        this.apiService.get<User>('https://jsonplaceholder.typicode.com/users').subscribe(
            (response: any) => {
                this.users = response;
            }
        )
    }
    
    deleteUser(id: number){
        this.users = this.users.filter(
            item => {
                if (id === item.id){
                    return false
                } else {
                    return true;
                }
            }
        )
    }
}