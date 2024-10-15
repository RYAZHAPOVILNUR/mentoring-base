import { Injectable } from '@angular/core';
import { User } from './interfaces/user-interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  

  private usersSubject$ = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject$.asObservable();

  setUsers(users: User[]) {
    this.usersSubject$.next(users);
  }

  editUser(editedUser: User) {
    this.usersSubject$.next(
      this.usersSubject$.value.map((user) =>
        user.id === editedUser.id ? editedUser : user
      )
    );
  }

  
  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((item) => item.id !== id)
    );
  }

  createUser(user: User) {
   const existingUser = this.usersSubject$.value.find(
    (currentElement) => currentElement.email === user.email
  );
  if (existingUser) {
    alert('ТАКОЙ EMAIL УЖЕ ЗАРЕГИСТРИРОВАН');
  } else {
    this.usersSubject$.next([...this.usersSubject$.value, user]);
    alert('НОВЫЙ ПОЛЬЗОВАТЕЛЬ УСПЕШНО ДОБАВЛЕН');
  }

 }
}