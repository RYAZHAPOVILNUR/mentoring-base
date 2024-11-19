import { Injectable } from '@angular/core';
import { IUser } from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public getFromLocalStorage<T>(key: string): T | null {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null;
  }

  public saveToLocalStorage<T>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data))
  }
}

