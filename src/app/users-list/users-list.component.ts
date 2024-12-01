import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersApiService } from '../servises/users-api.servise';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersService } from '../servises/users.service';
import { IUser } from '../Interfaces/user.interface';
import { map, pipe, take } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { UserAddButtonComponent } from './user-add-button/user-add-button.component';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [
    NgFor,
    UserCardComponent,
    AsyncPipe,
    MatDialogModule,
    UserAddButtonComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);
  private snackBar = inject(MatSnackBar);
  readonly dialog = inject(MatDialog);

  constructor() {
    this.usersApiService.getUsers().subscribe((response: IUser[]) => {
      this.usersService.setUsers(response);
    });
  }

  public deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  public createUser(user: IUser) {
    this.usersService.users$
      .pipe(
        take(1),
        map((users) =>
          users.find((existingUser) => existingUser.email === user.email)
        )
      )
      .subscribe((existingUser) => {
        if (existingUser !== undefined) {
          this.snackBar.open('Такой Email уже существует', 'ok', {
            duration: 3000,
          });
        } else {
          this.usersService.createUser({
            id: new Date().getTime(),
            name: user.name,
            email: user.email,
            website: user.website,
            company: {
              name: user.company.name,
            },
            phone: user.phone,
          });
          this.snackBar.open('Новый пользователь создан', 'ok', {
            duration: 3000,
          });
        }
      });
  }

  public editUser(formDialogValue: IUser) {
    this.usersService.editUser(formDialogValue);
  }
}
