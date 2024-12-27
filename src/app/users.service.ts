import { Injectable } from '@angular/core';
import { User } from './users-list/users-list.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  usersSubject$ = new BehaviorSubject<User[]>([]);

  setUsers(users: User[]) {
    this.usersSubject$.next(users);
  }

  editUser(editUser: User) {
    this.usersSubject$.next(
      this.usersSubject$.value.map((user) => {
        if (user.id === editUser.id) {
          return editUser;
        } else {
          return user;
        }
      })
    );
  }

  createUser(user: User) {
    this.usersSubject$.next([...this.usersSubject$.value, user]);
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((u) => u.id !== id)
    );
  }
}
