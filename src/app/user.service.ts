import { Injectable } from '@angular/core';
import { User } from './interfaces/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
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
        }
        return user;
      })
    );
  }

  createUser(user: User) {
    const existingUser = this.usersSubject$.value.find(
      (currentElement) => currentElement.email === user.email
    );

    if (existingUser !== undefined) {
      alert('Такой email уже существует');
    } else {
      this.usersSubject$.next([...this.usersSubject$.value, user]);
      alert('Новый пользователь успешно добавлен');
    }
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((user) => user.id !== id)
    );
  }
}
