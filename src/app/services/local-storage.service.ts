import { inject, Injectable } from '@angular/core';
import { Todo, User } from '../components/home/users-list/user-interface';
import { UsersService } from './users.service';
import { TodosService } from './todos.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly stoarageKeyUsers = 'users';
  private readonly stoarageKeyTodos = 'todos';
  private usersService = inject(UsersService);
  private todosService = inject(TodosService);

  public getUsersFromLocalStorage(): User[] {
    const data = localStorage.getItem(this.stoarageKeyUsers);
    return data ? JSON.parse(data) : null;
  }

  public saveUsersToLocalStorage(users: User[]): void {
    localStorage.setItem(this.stoarageKeyUsers, JSON.stringify(users));
  }

  public updateLocalStorageUsers(): void {
    const users = this.usersService.getUsers();
    this.saveUsersToLocalStorage(users);
  }

  public getTodosFromLocalStorage(): Todo[] {
    const data = localStorage.getItem(this.stoarageKeyTodos);
    return data ? JSON.parse(data) : null;
  }

  public saveTodosToLocalStorage(todos: Todo[]) {
    localStorage.setItem(this.stoarageKeyTodos, JSON.stringify(todos));
  }

  public updateLocalStorageTodos(): void {
    const todos = this.todosService.getTodos();
    this.saveTodosToLocalStorage(todos);
  }
}
