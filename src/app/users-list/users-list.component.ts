import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";
import { CreateUserFormComponent } from "../create-user-form/create-user-formcomponent";
import { createUser } from "../user-interface";

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
    readonly usersApiServis = inject(UsersApiService);
    readonly usersService = inject(UsersService);

    constructor() {
        this.usersApiServis.getUsers().subscribe(
            (response: any) => {
                this.usersService.setUsers(response);
            }
        )
    }

    deleteUser(id: number) {
        this.usersService.deleteUser(id)
    }  
    
    createUser(formData: createUser) {
        this.usersService.createUser(
            {
                id: new Date().getTime(),
                name: formData.name,
                email: formData.email,
                website: formData.website,
                company:{
                    name: formData.companyName,
                }
            }
        )
    }
}