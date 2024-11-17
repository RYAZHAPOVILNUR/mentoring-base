import {Component, inject} from "@angular/core";
import {AsyncPipe, NgFor} from "@angular/common";
import {UserCardComponent} from "./user-card/user-card.component";
import {UsersListService} from "./users-list.service";
import {User} from "../interfaces/user.interface";
import {Observable} from "rxjs";
import {CreateUserDialogComponent} from "./create-user-dialog/create-user-dialog.component";
import {EditUserDialogComponent} from "./edit-user-dialog/edit-user-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UsersApiService} from "../api-services/users-api.service";


@Component({
  imports: [NgFor, UserCardComponent, MatLabel, AsyncPipe, CreateUserDialogComponent, EditUserDialogComponent, MatFormField, MatInput, MatButton],
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  standalone: true,
})
export class UsersListComponent {
  readonly dialog = inject(MatDialog);
  private usersListService = inject(UsersListService)
  public users$: Observable<User[]> = this.usersListService.users$;
  private usersApiService = inject(UsersApiService)
  private _snackBar = inject(MatSnackBar);

  constructor() {
    this.usersApiService.getUsers().subscribe(users => this.usersListService.setUsers(users));
  }

  public createUserDialog(): void {
    const dialogRef = this.dialog.open(CreateUserDialogComponent);
    console.log('test')
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.usersListService.createUser(result);
        this.openSnackBar("Пользователь создан", 'Закрыть')
      }
    });
  }

  public deleteUser(id: number) {
    this.usersListService.deleteUser(id)
    this.openSnackBar("Пользователь удален", 'Закрыть')
  }

  public editUser(user: User) {
    this.usersListService.editUser(user)
    this.openSnackBar("Пользователь обновлен", 'Закрыть')
  }

  public openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
