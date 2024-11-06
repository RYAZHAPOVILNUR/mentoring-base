import { inject, Injectable } from '@angular/core';
import { Todo, User } from '../components/home/users-list/user-interface';
import { UsersService } from './users.service';
import { TodosService } from './todos.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public getUsersFromLocalStorage(key: string): User[] | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  public saveUsersToLocalStorage<T>(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public getTodosFromLocalStorage(key: string): Todo[] | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  public saveTodosToLocalStorage<T>(key: string , data: T) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
