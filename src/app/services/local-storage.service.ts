import { inject, Injectable } from '@angular/core';
import { Todo, User } from '../components/home/users-list/user-interface';
import { UsersApiService } from './users-api-service';
import { UsersService } from './users.service';
import { TodosApiService } from './todos-api.service';
import { TodosService } from './todos.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  readonly usersApiService = inject(UsersApiService);
  readonly usersService = inject(UsersService);
  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodosService);

  public loadUsersFromLocalStorage() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.usersService.setUsers(JSON.parse(storedUsers));
    } else {
      this.usersApiService.getUsers().subscribe((response: any) => {
        this.usersService.setUsers(response);
        this.saveUsersToLocalStorage(response);
      });
    }
  }

  public saveUsersToLocalStorage(users: User[]) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  public updateLocalStorage() {
    const users = this.usersService.getUsers();
    this.saveUsersToLocalStorage(users)
  }

  public loadTodosFromLocalStorage() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todosService.setTodos(JSON.parse(storedTodos));
    } else {
      this.todosApiService.getTodos().subscribe((response: any) => {
        this.todosService.setTodos(response);
        this.saveTodosToLocalStorage(response);
      });
    }
  }

  public saveTodosToLocalStorage(todos: Todo[]) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  public updateLocalStorageTodo() {
    const todos = this.todosService.getTodos();
    this.saveTodosToLocalStorage(todos);
  }
}
