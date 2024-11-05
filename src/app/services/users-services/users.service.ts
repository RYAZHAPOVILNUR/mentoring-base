import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user-interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private usersSubject$ = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject$.asObservable();

  constructor() {
    this.loadUsersFromLocalStorage();
  }

  setUsers(users: User[]) {
    this.usersSubject$.next(users);
    this.saveUsersToLocalStorage(users);
  }

  getUsers(): User[] {
    return this.usersSubject$.value;
  }

  editUser(editedUser: User) {
    this.usersSubject$.next(
      this.usersSubject$.value.map((user) =>
        user.id === editedUser.id ? editedUser : user
      )
    );
    this.saveUsersToLocalStorage(this.usersSubject$.value);
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((item) => item.id !== id)
    );
    this.saveUsersToLocalStorage(this.usersSubject$.value);
  }

  createUser(user: User) {
    if (!this.existingUser(user.email)) {
      this.usersSubject$.next([...this.usersSubject$.value, user]);
      this.saveUsersToLocalStorage(this.usersSubject$.value);
    } else {
      console.warn(`User with email ${user.email} already exists.`);
    }
  }

  existingUser(email: string): boolean {
    return this.usersSubject$.value.some((user) => user.email === email);
  }

  private saveUsersToLocalStorage(users: User[]) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  private loadUsersFromLocalStorage() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.setUsers(JSON.parse(storedUsers));
    }
  }
}