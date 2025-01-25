import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private usersSubject$ = new BehaviorSubject<User[]>([]);
  public usersList$ = this.usersSubject$.asObservable();

  setUsers(users: User[]) {
    this.usersSubject$.next(users);
  }

  editUser(editedUser: User) {
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

  createUser(user: User) {
    const existingUser = this.usersSubject$.value.find(
      (currentElement) => currentElement.email === user.email
    );

    if (existingUser !== undefined) {
    } else {
      this.usersSubject$.next([...this.usersSubject$.value, user]);
    }
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((item) => {
        if (id === item.id) {
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
