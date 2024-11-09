import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { User } from "./users-list/users-list.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersSubject$ = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject$.asObservable()
  private _snackBar = inject(MatSnackBar);

  setUsers(users: User[]) {
    this.usersSubject$.next(users)
  }

  editUsers(editUser: User) {
    this.usersSubject$.next(
      this.usersSubject$.value.map(
        user => {
          if (user.id === editUser.id) {
            return editUser
          } else {
            return user
          }
        }
      )
    )
  }

  createUser(user: User) {
    const existingUser = this.usersSubject$.value.find(
      (currentElement) => currentElement.email === user.email
    )
    if(existingUser) {
      this._snackBar.open('Такой email уже зарегистрирован', 'ok', {
        duration: 4000
      })
    } else {
      this.usersSubject$.next([...this.usersSubject$.value, user])
      this._snackBar.open('Пользователь успешно создан', 'ok', {
        duration: 4000
      })
    }
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter(
        user => user.id !== id
      )
    )
  }
}
