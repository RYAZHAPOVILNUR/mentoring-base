import { AsyncPipe, NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, Component, inject} from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";
import { CreateUserForm } from "../create-user-form/create-user-form.component";


const consoleResponse = (response: unknown) => console.log(response) 

export interface IUsers {
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
    imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserForm],
    changeDetection: ChangeDetectionStrategy.OnPush

})

export class UsersListComponent {
    readonly usersApiService = inject(UsersApiService);
    readonly usersService = inject(UsersService);

    public deleteUser(id: number) {
        this.usersService.deleteUsers(id)
    };


    public createUser(formData: any) {
        console.log('ДАННЫЕ ФОРМЫ:', formData);
        this.usersService.createUsers({
            id: new Date().getTime(),
            name: formData.name,
            email: formData.email,
            website: formData.website,
            company: {
                name: formData.companyName
            }
        })
    };

    constructor() {
        this.usersApiService.getUsers().subscribe(
            (response: any) => {
                this.usersService.setUsers(response);
            }
        );


        this.usersService.usersSubject.subscribe(
            users => console.log(users)
        );
    };
}