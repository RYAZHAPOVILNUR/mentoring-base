import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { UserCardComponent } from "./user-card/user-card.component";
import { MatIcon } from "@angular/material/icon";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatMiniFabButton } from "@angular/material/button";
import { CreateUserDialogComponent } from "./create-user-dialog/create-user-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { IUser } from "../interfaces/interfaces";
import { UsersApiService } from "../services/users-api.service";
// import { UsersService } from "../services/users.service";
import { map, take, tap } from "rxjs";
import { Store } from "@ngrx/store";
import { UsersActions } from "./store/users.actions";
import { selectUsers } from "./store/users.selectors";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    UserCardComponent,
    AsyncPipe,
    MatIcon,
    MatDialogModule,
    MatMiniFabButton,
    CreateUserDialogComponent
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  // user!: User

  readonly usersApiService = inject(UsersApiService);
  // readonly usersService = inject(UsersService);
  readonly dialog = inject(MatDialog);
  private _snackBar = inject(MatSnackBar);
  private readonly store = inject(Store);
  public readonly users$ = this.store.select(selectUsers)

  constructor() {
    this.usersApiService.getUsers().subscribe(
      (response: any) => {
        // this.usersService.setUsers(response);
        this.store.dispatch(UsersActions.set({users: response}))
      }
    )
    // this.usersService.users$.subscribe((users) => console.log(users))
  }

  public deleteUser(id:number) {
    // this.usersService.deleteUser(id);
    this.store.dispatch(UsersActions.delete({ id }))
  }

  public editUser(user: IUser) {
    // this.usersService.editUsers(user);
    this.store.dispatch(UsersActions.edit({ user }));
  }

  public createUser(user: IUser) {
    this.store.dispatch(UsersActions.create({
      user: {
        id: new Date().getTime(),
        name: user.name,
        email: user.email,
        website: user.website,
        phone: user.phone,
        company: {
          name: user.company.name
        }
      } }))
  }
  public openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateUserDialogComponent, {
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe((createResult: IUser) => {
      if (!createResult) {
        this._snackBar.open('Пользователь не создан', 'ok', { duration: 4000 });
        return;
      }

      this.users$.pipe(
        take(1),
        map((users) => users.some((user) => user.email === createResult.email)),
        tap((emailExists) => {
          const message = emailExists
            ? 'Такой Email уже существует'
            : (this.createUser(createResult), 'Пользователь успешно создан');

          this._snackBar.open(message, 'ok', { duration: 4000 });
        })
      ).subscribe();
    });
  }
}
