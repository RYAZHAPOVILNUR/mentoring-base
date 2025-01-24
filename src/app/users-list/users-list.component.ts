import { ChangeDetectionStrategy, Component, inject, Injectable } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from "@angular/router";
import { AsyncPipe, NgFor } from "@angular/common";
import { UserApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { User,} from "./users-interface";
import { UsersService } from "../user.service";

@Component({
    selector: 'app-users-list',
    imports: [HeaderComponent, RouterLink, NgFor, UserCardComponent,AsyncPipe],
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
    readonly usersApiService = inject(UserApiService)
    readonly usersService = inject(UsersService)

    constructor() {
        this.usersApiService.getUsers().subscribe(
            (response: User[]) => {
                this.usersService.setUsers(response);
            }
        )
    }
    
    deleteUser(id: number) {
        this.usersService.deleteUser(id)
    }
}