import { NgFor, NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { UsersApiService } from "../../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { Todo } from "../../interfaces/todos.interface";
import { User } from "../../interfaces/user.interface";
import { UsresService } from "../../users.service";


@Component({
    selector: 'app-users-list',
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    imports: [NgFor, UserCardComponent]
})

export class UsersListComponent {
    readonly usersApiService = inject(UsersApiService);
    readonly userService = inject(UsresService);
    
    users = this.userService.users
    constructor() {
        this.usersApiService.getUsers().subscribe(
            (respons: any) => {
                this.userService.setUsers(respons);
                
            }
        )
    }

    deleteUser(id: number) {
        this.userService.deleteUser(id)
       
}

}