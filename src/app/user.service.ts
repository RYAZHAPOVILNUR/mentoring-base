import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './interfaces/user-interface';

@Injectable ({providedIn: 'root'})

export class UserService {
  private userSubject$ = new BehaviorSubject<User[]>([]);
  users$ = this.userSubject$.asObservable();

  getUsers (): Observable<User[]> {
    return this.userSubject$.asObservable();
  }

  setUsers (users: User[]) {
    this.userSubject$.next (users);
  }

  editUser (editedUser: User) {
    this.userSubject$.next(
      this.userSubject$.value.map(user => user.id === editedUser.id ? editedUser : user)
    );
  }

  createUser (user: User) {
    const existingUser = this.userSubject$.value.find(
      (currentElement) => currentElement.email === user.email
    );

    if (existingUser) {
      alert ('Такой пользователь уже зарегистрирован'); 
    } else {
      this.userSubject$.next([...this.userSubject$.value, user]);
      alert ('Пользователь успешно добавлен');
    }
  }

  deleteUser (id: number) {
    this.userSubject$.next(
      this.userSubject$.value.filter(item => item.id !== id)
    );
  }
}