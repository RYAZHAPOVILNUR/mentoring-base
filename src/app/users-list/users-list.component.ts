import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";
import { MatIcon } from "@angular/material/icon";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatMiniFabButton } from "@angular/material/button";
import { CreateUserDialogComponent } from "./create-user-dialog/create-user-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { IUser } from "../interfaces/interfaces";

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
  readonly usersService = inject(UsersService)
  readonly dialog = inject(MatDialog);
  private _snackBar = inject(MatSnackBar);

  constructor() {
    this.usersApiService.getUsers().subscribe(
      (response: any) => {
        this.usersService.setUsers(response)
      }
    )
    this.usersService.users$.subscribe((users) => console.log(users))
  }

  public deleteUser(id:number) {
    this.usersService.deleteUser(id);
  }

  public editUser(user: IUser) {
    this.usersService.editUsers(user)
  }

  public openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateUserDialogComponent, {
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe((createResult: IUser) => {
      const message: string = createResult
      ? this.usersService.getUsers().some((element) => element.email === createResult.email)
        ? 'Такой Email уже существует'
        : (this.usersService.createUser(createResult), 'Пользователь успешно создан')
      : 'Пользователь не создан'
      this._snackBar.open(message, 'ok', { duration: 4000 })
    });
  }
}
