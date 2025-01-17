import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";




@Component(
    {
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
    imports: [NgFor]
    }
)

export class UsersListComponent {
    readonly apiService = inject(HttpClient);
    users: any = [];

    constructor(){
        this.apiService.get('https://jsonplaceholder.typicode.com/users').subscribe(
            (response) => {
                this.users = response;
                console.log('USERS:', this.users)
            }
        )
    }

    deleteUser(id: number){
        this.users = this.users.filter(
            // @ts-ignore
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