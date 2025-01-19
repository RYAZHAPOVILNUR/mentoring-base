import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersActions } from './users.action';
import { SnackbarService } from '../../../../services/snackbar.service';
import { filter, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CreateUserFormComponent } from '../../../forms/create-user-form/create-user-form.component';
import { User } from '../../../../interfaces/user.interface';
import { UsersApiService } from '../../../../services/api-services/users-api.service';
import { DialogService } from '../../../../services/dialog.service';

@Injectable({
  providedIn: 'root',
})
export class UsersEffects {
  private readonly actions$: Actions = inject(Actions);
  private readonly snackbarService: SnackbarService = inject(SnackbarService);
  private readonly dialog: DialogService = inject(DialogService);
  private readonly usersApiService: UsersApiService = inject(UsersApiService);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.load),
      mergeMap(() => {
        const localStorageUsers = localStorage.getItem('users');

        if (localStorageUsers) {
          const users = JSON.parse(localStorageUsers);
          return of(UsersActions.set({ users }));
        } else {
          return this.usersApiService.getUsers().pipe(
            map((users) => {
              localStorage.setItem('users', JSON.stringify(users));
              return UsersActions.set({ users });
            }),
            catchError(() => {
              return of({ type: '[Users] Load Error' });
            })
          );
        }
      })
    )
  );

  showSuccessMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UsersActions.create, UsersActions.delete, UsersActions.edit),
        tap((action) => {
          let message = '';
          if (action.type === UsersActions.create.type) {
            message = 'Пользователь успешно создан';
          } else if (action.type === UsersActions.delete.type) {
            message = 'Пользователь успешно удален';
          } else if (action.type === UsersActions.edit.type) {
            message = 'Пользователь успешно редактирован';
          }
          this.snackbarService.showMessage(message);
        })
      ),
    { dispatch: false }
  );

  openCreateUserDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.openCreateUserDialog),
      mergeMap(() =>
        this.dialog
          .open(CreateUserFormComponent, { data: { user: null } })
          .afterClosed()
          .pipe(
            map((user: User) => {
              if (!user) return { type: '[Users] No Action' };
              return UsersActions.create({ user: user });
            }),
            catchError(() => of({ type: '[Users] Create Dialog Error' }))
          )
      )
    )
  );

  openEditUserDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.openEditUserDialog),
      mergeMap((action) =>
        this.dialog
          .open(CreateUserFormComponent, {
            data: { user: action.user },
          })
          .afterClosed()
          .pipe(
            filter((editedUser): editedUser is User => !!editedUser),
            map((editedUser) => UsersActions.edit({ user: editedUser })),
            catchError(() => of({ type: '[Users] Edit Dialog Error' }))
          )
      )
    )
  );

  saveUsersToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UsersActions.create, UsersActions.edit, UsersActions.delete),
        tap((action) => {
          const currentUsers = JSON.parse(
            localStorage.getItem('users') || '[]'
          );

          if (action.type === UsersActions.create.type) {
            const updatedUsers = [...currentUsers, action.user];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
          } else if (action.type === UsersActions.edit.type) {
            const updatedUsers = currentUsers.map((user: User) =>
              user.id === action.user.id ? action.user : user
            );
            localStorage.setItem('users', JSON.stringify(updatedUsers));
          } else if (action.type === UsersActions.delete.type) {
            const updatedUsers = currentUsers.filter(
              (user: User) => user.id !== action.id
            );
            localStorage.setItem('users', JSON.stringify(updatedUsers));
          }
        })
      ),
    { dispatch: false }
  );
}
