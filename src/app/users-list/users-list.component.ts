import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { UsersApiService } from "../services/users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../services/user.service";
import { CreateUserFormComponent } from "../create-user-form/create-user-form.component";
import { ICreateUser, IUser } from "../interfaces/user.interface";
import { CreateUserDialogComponent } from "../create-user-form/create-user-dialog/create-user-dialog.component";

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
    imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserDialogComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersListComponent {

    readonly usersApiServise = inject(UsersApiService)
    readonly usersService = inject(UsersService)
    

    constructor() {
        this.usersApiServise.getUsers().subscribe(
            (response: any) => {
                this.usersService.setUsers(response)
            },
            (error: any) => {
                console.error('Ошибка при получении пользователей:', error);
            }
        )

        this.usersService.users$.subscribe(
            users => console.log(users)
        )
    }
    
    public deleteUser(id: number) {
        this.usersService.deleteUsers(id)
    }

    public editUser(user: IUser) {
        this.usersService.editUsers(user)
    }

    public createUser(formData: ICreateUser) {
        this.usersService.createUsers({
            id: new Date().getTime(),
            name: formData.name,
            email: formData.email,
            website: formData.website,
            company: {
                name: formData.company.name,
            },
        })
        console.log('Данные формы: ', event)
    }
}

