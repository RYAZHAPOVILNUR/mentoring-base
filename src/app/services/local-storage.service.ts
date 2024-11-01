import { Injectable } from '@angular/core';
import { User } from '../components/home/users-list/user-interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  getUsersFromLocalStorage(key: string): User[] | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  saveUsersToLocalStorage<T>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
