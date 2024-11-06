import { inject, Injectable } from '@angular/core';
import { User } from '../../interfaces/user-interfaces';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../local-storage.service';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private usersSubject$ = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject$.asObservable();
  private localStorageKey = 'users';
  private localStorageService = inject(LocalStorageService);

  setUsers(users: User[]) {
    this.usersSubject$.next(users);
    this.localStorageService.saveUsersToLocalStorage(this.localStorageKey, users);
  }

  getUsers(): User[] {
    return this.usersSubject$.value;
  }

  editUser(editedUser: User) {
    this.usersSubject$.next(
      this.usersSubject$.value.map((user) =>
        user.id === editedUser.id? editedUser : user
      )
    );
    this.localStorageService.saveUsersToLocalStorage(this.localStorageKey, this.usersSubject$.value);
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((item) => item.id!== id)
    );
    this.localStorageService.saveUsersToLocalStorage(this.localStorageKey, this.usersSubject$.value);
  }

  createUser(user: User) {
    if (!this.existingUser(user.email)) {
      this.usersSubject$.next([...this.usersSubject$.value, user]);
      this.localStorageService.saveUsersToLocalStorage(this.localStorageKey, this.usersSubject$.value);
    } else {
      console.warn(`User with email ${user.email} already exists.`);
    }
  }

  existingUser(email: string): boolean {
    return this.usersSubject$.value.some((user) => user.email === email);
  }

  loadUsersFromLocalStorage(): void {
    const storedUsers = this.localStorageService.getUsersFromLocalStorage(this.localStorageKey);
    if (storedUsers) {
      this.setUsers(storedUsers);
    }
  }
}