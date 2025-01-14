import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, Injectable } from "@angular/core";
import { User } from "./user-interface";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { CreateUserFormComponent } from "../create-user-form/create-user-form.component";
import { UsersService } from "../users.service";

@Component ({
    selector: 'app-users-list', 
    templateUrl: './users-list.component.html', 
    styleUrl: './users-list.component.scss',
    standalone: true,  
    imports: [NgFor, UserCardComponent, CreateUserFormComponent, AsyncPipe], 
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersListComponent {
    readonly usersApiService = inject(UsersApiService); 
    readonly usersService = inject(UsersService);   

    constructor() {
        this.usersApiService.getUsers() .subscribe(
            (response: User[]) => {
                this.usersService.setUsers(response);
            }
        )
    }

    deleteUser(id:number) {
        this.usersService.deleteUser(id);
    }

    public createUser(event: any) {
        console.log('ДАННЫЕ ФОРМЫ: ', event); 
    }
}
