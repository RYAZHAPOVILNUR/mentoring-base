import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";
import { MatIcon } from "@angular/material/icon";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatMiniFabButton } from "@angular/material/button";
import { EditUserDialogComponent } from "./edit-user-dialog/edit-user-dialog.component";
import { CreateUserDialogComponent } from "./create-user-dialog/create-user-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";

export interface User {
  id: number;
  name: string;
  username?: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  },
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase?: string;
    bs?: string;
  }
}

export interface CreateUser {
  id: number,
  name: string,
  email: string,
  website: string,
  company: {
    name: string
  };
  phone: string;
}

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
  user!: User

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

  public editUser(user: CreateUser) {
    this.usersService.editUsers(user)
  }

  public createUser(user: CreateUser) {
    this.usersService.createUser({
      id: new Date().getTime(),
      name: user.name,
      email: user.email,
      website: user.website,
      company: {
        name: user.company.name,
      },
      phone: user.phone,
    })
      console.log("ДАННЫЕ ФОРМЫ", user);
    console.log(new Date().getTime())

  }

  public openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateUserDialogComponent, {
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe((createResult: User) => {
      if (createResult) {
        // Используем метод getUsers() для получения текущего списка пользователей
        const existingUser = this.usersService.getUsers().find(
          (currentElement) => currentElement.email === createResult.email
        );

        if (existingUser) {
          // Показываем сообщение, если пользователь с таким email уже существует
          this._snackBar.open('Такой email уже зарегистрирован', 'ok', {
            duration: 4000,
          });
        } else {
          // Если пользователя с таким email нет, создаем нового пользователя
          this.usersService.createUser(createResult);
          this._snackBar.open('Пользователь успешно создан', 'ok', {
            duration: 4000,
          });
        }
      } else {
        // Сообщение, если создание пользователя отменено
        this._snackBar.open('Пользователь не создан', 'ok', {
          duration: 4000,
        });
      }
    });
  }
}
