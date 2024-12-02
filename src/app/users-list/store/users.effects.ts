import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UsersActions } from "./users.actions";
import {UsersApiService} from "../../services/user-services/users-api.service";
import {UserInterface} from "../../interfaces/user-interfaces";

export const loadUsers = createEffect(
    (actions$: Actions = inject(Actions), usersService: UsersApiService = inject(UsersApiService)) => {
        return actions$.pipe(
            ofType(UsersActions.load),
            switchMap(() =>
                usersService.getUsers().pipe(
                    map((users: UserInterface[]) => UsersActions.loadSuccess({ users })),
                    catchError((error: any) => of(UsersActions.loadError({ error })))
                )
            )
        );
    },
    { functional: true }
);
