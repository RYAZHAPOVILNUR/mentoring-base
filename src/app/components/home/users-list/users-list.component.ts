import {AsyncPipe, NgFor} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, OnInit,} from '@angular/core';
import {UserCardComponent} from './user-card/user-card.component';
import {CreateUserFormComponent} from '../create-user-form/create-user-form.component';
import {User} from '../../../interfaces/user-interface';
import {MatDialog} from '@angular/material/dialog';
import {CreateUserDialogComponent} from '../create-user-form/create-user-dialog/create-user-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {Store} from "@ngrx/store";
import {UsersApiService} from "../../../services/usersApi.service";
import {UserActions} from "./store/user.actions";
import {selectUsers} from "./store/users.selectors";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [NgFor,UserCardComponent, MatButtonModule ,AsyncPipe, CreateUserFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  private readonly store = inject(Store);
  private userApiService = inject(UsersApiService);
  public readonly users$ = this.store.select(selectUsers)

  ngOnInit() {
    this.userApiService.getUsers().subscribe((response: User[]) => {
      this.store.dispatch(UserActions.set({users: response.slice(0, 6)}));
    })
  }

  public createUser(formData: User) {
    this.store.dispatch(
      UserActions.create({
        user: {
          id: new Date().getTime(),
          name: formData.name,
          email: formData.email,
          website: formData.website,
          company: {
            name: formData.company.name,
          },
        }
      })
    )
  }

  public editUser(user: User) {
    this.store.dispatch(
      UserActions.edit({
        user
      })
    )
  }

  public deleteUser(id: number) {
    this.store.dispatch(
      UserActions.delete({id})
    )
  }

  readonly dialogTwo = inject(MatDialog);

  createUserDialog(): void {
    const dialogRef = this.dialogTwo.open(CreateUserDialogComponent);

    dialogRef.afterClosed().subscribe((createResult: User) => {
      if (createResult) {
        this.createUser(createResult);
        this.openSnackBarTwo();
      }
    });
  }

  readonly snackBar = inject(MatSnackBar);

  readonly snackBarCreate = inject(MatSnackBar);

  openSnackBarTwo(): void {
    this.snackBar.open('Пользователь создан🐒', 'Закрыть', {
      duration: 2000,
    });
  }
}
