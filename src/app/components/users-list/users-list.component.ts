import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { UsersApiService } from "../../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsresService } from "../../users.service";
import { CreateUserFormComponent } from "../create-user-form/create-user-form.component";
import { User } from "../../interfaces/user.interface";


@Component({
    selector: 'app-users-list',
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent],
    changeDetection:ChangeDetectionStrategy.OnPush
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

    public createUser(formData: any) {
        this.userService.creatUser({
            id: new Date().getTime(),
            name: formData.name,
            email: formData.email,
            website: formData.website,
            company: {
                name: formData.companyName,
            }
        })
    }

    deleteUser(id: number) {
        this.userService.deleteUser(id)
        this.users = this.userService.users
    }
       
}

