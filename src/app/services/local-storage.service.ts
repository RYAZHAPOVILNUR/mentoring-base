import { Injectable } from '@angular/core';
import { User } from '../interfaces/user-interfaces';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  getUsersFromLocalStorage(key: string): User[] | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  saveUsersToLocalStorage<T>(key: string, data: T): T {
    localStorage.setItem(key, JSON.stringify(data));
    return data;
  }

  removeUsersFromLocalStorage(key: string): boolean {
    localStorage.removeItem(key);
    return true;
  }
}