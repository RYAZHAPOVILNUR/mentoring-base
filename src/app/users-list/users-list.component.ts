import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Comment } from "@angular/compiler";
import { Component, inject, Injectable } from "@angular/core";

// @Injectable()

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    imports: [NgFor],
    standalone: true
})
export class UsersListComponent {
    readonly apiService = inject(HttpClient);
    users: any = [];

        constructor() {
        this.apiService.get('https://jsonplaceholder.typicode.com/users').subscribe(
            (response: any) => {
                this.users = response;
                console.log('Users:', this.users)
            }
        )
    }

    deleteUser(id: number) {
        this.users = this.users.filter(
            //@ts-ignore
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