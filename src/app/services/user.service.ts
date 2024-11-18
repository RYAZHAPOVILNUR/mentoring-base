import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user-interface';
import { StorageService } from './local-storage.service';
import { UsersApiService } from './users-api.service';

@Injectable ({providedIn: 'root'})

export class UserService {
  private userSubject$ = new BehaviorSubject<User[]>([]);
  users$ = this.userSubject$.asObservable();
  private localStorage = inject(StorageService);
  usersApiService = inject(UsersApiService);

  loadUsers () {
    const localStorageUsers = this.localStorage.getUsers('users');

    if (localStorageUsers) {
      this.userSubject$.next(localStorageUsers);
    } else {
      this.usersApiService.getUsers().subscribe(
        data => {
          this.setUsers(data)
        }
      )
    }
  }

  editUser (editedUser: User) {
    const updatedUser = this.userSubject$.value.map(user => user.id === editedUser.id ? editedUser : user);
    this.setUsers(updatedUser);
  }

  createUser (user: User) {
    const newUser = [...this.userSubject$.value, user]
    const existingUser = this.userSubject$.value.find(
      (currentElement) => currentElement.email === user.email
    );

    if (existingUser) {
      alert ('Такой пользователь уже зарегистрирован'); 
    } else {
      this.userSubject$.next([...this.userSubject$.value, user]);
      alert ('Пользователь успешно добавлен');
      this.setUsers(newUser)
    };
  }

  deleteUser (id: number) {
    const deleteUser = this.userSubject$.value.filter(item => item.id !== id);
    this.setUsers(deleteUser)
  }

  setUsers(data: User[]): void {
    this.localStorage.saveUsers('users', data); 
    this.userSubject$.next(data);
  }  
}