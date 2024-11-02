import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../user.service";
import { CreateUserFormComponent } from "../create-user-form/create-user-form.component";


export interface IUser {
    id: number,
    name: string,
    username?: string,
    email: string,
    address?: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone?: string,
    website: string,
    company: {
        name: string,
        catchPhrase?: string,
        bs?: string
    }
}

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
    imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersListComponent {
    readonly usersApiServise = inject(UsersApiService)
    readonly usersService = inject(UsersService)

    constructor() {
        this.usersApiServise.getUsers().subscribe(
            (response: any) => {
                this.usersService.setUsers(response)
            }
        )

        this.usersService.users$.subscribe(
            users => console.log(users)
        )
    }
    deleteUser(id: number) {
        this.usersService.deleteUsers(id)
    }

    public createUser(formData: any) {
        this.usersService.createUsers({
            id: new Date().getTime(),
            name: formData.name,
            email: formData.email,
            website: formData.website,
            company: {
                name: formData.companyName,
            },
        })
        console.log('Данные формы: ', event)
    }


}

