import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './interfaces/user-interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private _snackBar = inject(MatSnackBar);
  private usersSubject$ = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject$.asObservable();

  setUsers(users: User[]) {
    this.usersSubject$.next(users);
  }

  editUser(editedUser: User) {
    this.usersSubject$.next(
      this.usersSubject$.value.map((user) => {
        if (user.id === editedUser.id) {
          this.openSnackBar('Данные юзера изменены!', 'ОК');
          return editedUser;
        } else {
          return user;
        }
      })
    );
  }

  createUser(user: User) {
    const existingUser = this.usersSubject$.value.find(
      (item) => item.email === user.email
    );

    if (existingUser) {
      this.openSnackBar('Такой имэйл уже существует!', 'ОК');
    } else {
      this.usersSubject$.next([...this.usersSubject$.value, user]);
      this.openSnackBar('Юзер создан!', 'ОК');
    }
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((user) => user.id !== id)
    );
    this.openSnackBar('Юзер удален!', 'ОК');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
