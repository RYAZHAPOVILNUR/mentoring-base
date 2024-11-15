import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  getFromLocalStorage<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) as T : null;
  }

  saveToLocalStorage<T>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data))
  }
}
