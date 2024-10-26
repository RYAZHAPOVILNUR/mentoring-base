import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";
import { createUser, User } from "../user-interface";
import { MatDialog } from "@angular/material/dialog";
import { CreateUserFormComponent } from "./create-user-form/create-user-form.component";
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    imports: [NgFor, UserCardComponent, AsyncPipe, MatIconModule],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
    readonly usersApiServis = inject(UsersApiService);
    readonly usersService = inject(UsersService);
    readonly dialog = inject(MatDialog);
    readonly snackBar = inject(MatSnackBar)

    @Input()
    user!: User;

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

    editUser(user: createUser) {
        this.usersService.editUser({
            ...user
        })
    }
    
    createUser(formData: createUser) {
        this.usersService.createUser(
            {
                id: new Date().getTime(),
                name: formData.name,
                email: formData.email,
                website: formData.website,
                phone: formData.phone,
                company: {
                    name: formData.company.name,
                },
            }
        )
    }

    openCreateDialog(){
        const dialogRef = this.dialog.open(CreateUserFormComponent);

        dialogRef.afterClosed().subscribe((createResult) => { 
            if (createResult) {
                this.createUser(createResult);
                this.snackBar.open('Пользователь успешно добавлен', 'ok', {duration: 3000,});
            }
            ;
        })
    };
    
}