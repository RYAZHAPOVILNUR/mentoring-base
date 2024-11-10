import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from './Interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private userSubject$ = new BehaviorSubject<IUser[]>([]);
  users$ = this.userSubject$.asObservable();

  setUsers(users: IUser[]) {
    this.userSubject$.next(users);
  }

  editUser(editedUser: IUser) {
    this.userSubject$.next(
      this.userSubject$.value.map((user) => {
        if (user.id === editedUser.id) {
          return editedUser;
        } else {
          return user;
        }
      })
    );
  }

  createUser(user: IUser) {
    const existingUser = this.userSubject$.value.find(
      (currentElement) => currentElement.email === user.email
    );

    if (existingUser !== undefined) {
      alert('ТАКОЙ EMAIL УЖЕ ЗАРЕГИСТРИРОВАН');
    } else {
      this.userSubject$.next([...this.userSubject$.value, user]);
      // alert('НОВЫЙ ЮЗЕР УСПЕШНО ДОБАВЛЕН');
    }
  }

  deleteUser(id: number) {
    this.userSubject$.next(
      this.userSubject$.value.filter((item) => {
        if (id === item.id) {
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
