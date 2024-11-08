import { Injectable } from '@angular/core';
import { Todo, User } from '../components/home/users-list/user-interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public getUsersFromLocalStorage(key: string): User[] | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  public saveUsersToLocalStorage(users: User[]) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  public getTodosFromLocalStorage(key: string): Todo[] | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  public saveTodosToLocalStorage(todos: Todo[]) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
