import { Injectable } from '@angular/core';
import { User } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  getUsers(key: string): User[] {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }

  saveUsers(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
} 