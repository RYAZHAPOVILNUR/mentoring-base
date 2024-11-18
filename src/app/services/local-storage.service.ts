import { Injectable } from '@angular/core';
import { User } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  getUsers(key: string): User[] {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  saveUsers<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
} 