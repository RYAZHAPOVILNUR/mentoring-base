import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, Input } from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { createUser, User } from "../user-interface";
import { MatDialog } from "@angular/material/dialog";
import { CreateUserFormComponent } from "./create-user-form/create-user-form.component";
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { Store } from "@ngrx/store";
import { UserActions } from "./store/user.actions";
import { selectUsers } from "./store/users.selectors";

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
    readonly dialog = inject(MatDialog);
    readonly snackBar = inject(MatSnackBar);
    private readonly store = inject(Store);
    public readonly users$ = this.store.select(selectUsers);

    @Input()
    user!: User;

    constructor() {
        this.usersApiServis.getUsers().subscribe(
            (response: any) => {
                this.store.dispatch(UserActions.set({users: response}));
            }
        )
    }

    deleteUser(id: number) {
        this.store.dispatch(UserActions.delete({id}));
    }  

    editUser(user: createUser) {
        this.store.dispatch(UserActions.edit({user}));
    }
    
    createUser(formData: createUser) {
        this.store.dispatch(UserActions.create({
            user: {
                id: new Date().getTime(),
                name: formData.name,
                email: formData.email,
                website: formData.website,
                phone: formData.phone,
                company: {
                    name: formData.company.name,
                },
            }
        }))
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