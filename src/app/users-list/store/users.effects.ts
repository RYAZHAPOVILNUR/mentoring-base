import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersApiService } from '../../users-api.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { UsersActions } from './users.actions';

export const loadUsers = createEffect(
  (actions$ = inject(Actions), usersService = inject(UsersApiService)) => {
    return actions$.pipe(
      ofType(UsersActions.load),
      switchMap(() =>
        usersService.getUsers().pipe(
          map((users) => UsersActions.loadedSuccess({ users })),
          catchError((error) => of(UsersActions.loadedError({ error })))
        )
      )
    );
  },
  { functional: true }
);
