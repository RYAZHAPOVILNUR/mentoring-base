import {Component, Inject, inject} from "@angular/core";
import {AsyncPipe, NgFor} from "@angular/common";
import {UserCardComponent} from "./user-card/user-card.component";
import {UsersListService} from "./users-list.service";
import {User} from "../interfaces/user.interface";
import {Observable} from "rxjs";
import {CreateUserFormComponent} from "../create-user-form/create-user-form.component";
import {EditUserDialogComponent} from "./edit-user-dialog/edit-user-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  imports: [NgFor, UserCardComponent, MatLabel,AsyncPipe, CreateUserFormComponent, EditUserDialogComponent, MatFormField, MatInput, MatButton],
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  standalone: true,
})
export class UsersListComponent {

  usersListService = inject(UsersListService)
  users$ : Observable<User[]> = this.usersListService.users$;

  readonly dialog = inject(MatDialog);
  private _snackBar = inject(MatSnackBar);


  openDialog(): void {
    const dialogRef = this.dialog.open(CreateUserFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.usersListService.createUser(result);
        this.openSnackBar("Пользователь создан", 'Закрыть')

      }
    });
  }

  deleteUser(id: number ) {
    this.usersListService.deleteUser(id)
    this.openSnackBar("Пользователь удален", 'Закрыть')
  }

  updateUser(user:any) {
    this.usersListService.updateUser(user)
    this.openSnackBar("Пользователь обновлен", 'Закрыть')
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
