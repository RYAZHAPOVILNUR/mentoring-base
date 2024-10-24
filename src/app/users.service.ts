import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { User } from "./users-list/users-list.component";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersSubject$ = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject$.asObservable()

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
    this.usersSubject$.next(
      [...this.usersSubject$.value, user]
    )
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter(
        user => user.id !== id
      )
    )
  }
}
