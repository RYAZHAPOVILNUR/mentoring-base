import { Injectable } from '@angular/core';
import { User } from '../users-list/users-list.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class usersService {
  private usersSubject$ = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject$.asObservable();

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
    const userIsExisting = this.usersSubject$.value.find(
      (currentUser) => currentUser.email === user.email
    );

    if (userIsExisting) {
      alert('Пользователь с таким email уже зарегистрирован');
    } else {
      this.usersSubject$.next([...this.usersSubject$.value, user]);
      alert('Пользователь успешно создан');
    }
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((user) => {
        if (user.id === id) {
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
