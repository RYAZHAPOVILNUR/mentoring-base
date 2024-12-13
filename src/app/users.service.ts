import { Injectable } from '@angular/core';
import { User } from './users-list/users-list.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private user: { isAdmin: boolean } | null = null;
  usersSubject$ = new BehaviorSubject<User[]>([]);

  loginAsAdmin() {
    this.user = { isAdmin: true };
    localStorage.setItem('user', JSON.stringify(this.user));
  }
  loginAsUser() {
    this.user = { isAdmin: false };
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  logout() {
    this.user = null;
    localStorage.removeItem('user');
  }

  isAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    return user?.isAdmin === true;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

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

    if (existingUser) {
      alert('Такой пользователь уже есть');
    } else {
      this.usersSubject$.next([...this.usersSubject$.value, user]);
      alert('Пользователь успешно добавлен');
    }
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((item: User) => {
        if (id === item.id) {
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
