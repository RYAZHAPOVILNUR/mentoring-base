import { Injectable } from '@angular/core';
import { IUser } from './users-list/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  usersSubject$ = new BehaviorSubject<IUser[]>([]);
  users$ = this.usersSubject$.asObservable();

  setUsers(users: IUser[]) {
    this.usersSubject$.next(users);
  }

  editUser(editedUser: IUser) {
    this.usersSubject$.next(
      this.usersSubject$.value.map((user) => {
        if (user.id === editedUser.id) {
          return editedUser;
        } else {
          return user;
        }
      })
    );
  }

  createUser(newUser: IUser) {
    this.usersSubject$.next([...this.usersSubject$.value, newUser]);
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((user) => user.id !== id)
    );
  }
}
