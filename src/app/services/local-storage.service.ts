import { Injectable } from '@angular/core';
import { User } from '../interfaces/user-interfaces';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly storageKey = 'users';

  getUsers(): User[] {
    const storedUsers = localStorage.getItem(this.storageKey);
    return storedUsers ? JSON.parse(storedUsers) : null;
  }

  saveUsers(users: User[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }
}