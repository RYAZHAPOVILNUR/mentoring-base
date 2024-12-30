import { Injectable } from "@angular/core";
import { User } from "./users-list/user-interface";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class UsersService {
  usersSubject$ = new BehaviorSubject<User[]>([]);
  usersObservable$: Observable<User[]> = this.usersSubject$.asObservable();

  setUsers(users: User[]) {
    this.usersSubject$.next(users);
  }

  editUser(editedUser: User) {
      this.usersSubject$.next(
        this.usersSubject$.value.map(
          user => (user.id === editedUser.id ? editedUser : user)
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
      this.usersSubject$.value.filter(user => id === user.id ? false : true)
    )
  }
}
