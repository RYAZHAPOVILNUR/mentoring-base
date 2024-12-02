import {AsyncPipe, NgFor} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {UsersApiService} from '../services/user-services/users-api.service';
import {UserCardComponent} from './user-card/user-card.component';
import {UsersService} from '../services/user-services/users.service';
import {CreateUserFormComponent} from '../create-user-form/create-user-form.component';
import {CreateUserInterface, UserInterface} from '../interfaces/user-interfaces';
import {MatButtonModule} from '@angular/material/button';
import {CreateUserFormBtnAddDialogComponent} from './user-create-button/user-create-button.component';
import {Store} from "@ngrx/store";
import {UsersActions} from "./store/users.actions";
import {selectUser} from "./store/users.selectors";

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
    imports: [NgFor, UserCardComponent, AsyncPipe, CreateUserFormComponent, MatButtonModule, CreateUserFormBtnAddDialogComponent],
    changeDetection: ChangeDetectionStrategy.OnPush, // changeDetection: ChangeDetectionStrategy.OnPush для реактивных данных RXJS.
    // с это функцией OnPush работа кода и сайта с данными идет намного быстрее
})
export class UsersListComponent {
    readonly usersApiService: UsersApiService = inject(UsersApiService);
    readonly usersService: UsersService = inject(UsersService); // передали из файла users.service.ts
    private readonly store = inject(Store);
    public readonly users$ = this.store.select(selectUser);

    constructor() {
        // this.usersService.loadUsers(); // подписка => получение данных методом getUsers из файла users-api.service.ts
        this.store.dispatch(UsersActions.load()); // Дублируем setUsers с помощью this.store.dispatch()
    }

    deleteUser(id: number) {
        // this.usersService.deleteUser(id);
        this.store.dispatch(UsersActions.delete({id})); // дублируем deleteUser с помощью this.store.dispatch()
    }

    createUser(formData: CreateUserInterface) {
        // this.usersService.createUser({
        //     id: formData.id,
        //     name: formData.name,
        //     email: formData.email,
        //     website: formData.website,
        //     company: {
        //         name: formData.company.name,
        //     },
        // });
        this.store.dispatch(
            UsersActions.create({
                user: {
                    id: formData.id,
                    name: formData.name,
                    email: formData.email,
                    website: formData.website,
                    company: {
                        name: formData.company.name,
                    },
                }
            })
        );
    }

    editUser(user: UserInterface) {
        // this.usersService.editUser({
        //     ...user
        // });
        this.store.dispatch(UsersActions.edit({user})); // дублируем setUsers с помощью this.store.dispatch()
    }
}
