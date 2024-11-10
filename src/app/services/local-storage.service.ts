import { Injectable } from '@angular/core';
import { Todo, User } from '../components/home/users-list/user-interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public getFromLocalStorage<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    return data ? (JSON.parse(data) as T) : null;
  }

  public saveToLocalStorage<T>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
