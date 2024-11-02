import { inject, Injectable } from '@angular/core';
import { Todo, User } from '../components/home/users-list/user-interface';
import { UsersService } from './users.service';
import { TodosService } from './todos.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  readonly usersService = inject(UsersService);
  readonly todosService = inject(TodosService);
  readonly apiService = inject(HttpClient);

  public loadUsersFromLocalStorage() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.usersService.setUsers(JSON.parse(storedUsers));
    } else {
      this.apiService.get('https://jsonplaceholder.typicode.com/users').subscribe((response: any) => {
        this.usersService.setUsers(response);
        this.saveUsersToLocalStorage(response);
      });
    }
  }

  private saveUsersToLocalStorage(users: User[]) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  public updateLocalStorage() {
    const users = this.usersService.getUsers();
    this.saveUsersToLocalStorage(users);
  }

  public loadTodosFromLocalStorage() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todosService.setTodos(JSON.parse(storedTodos));
    } else {
      this.apiService.get('https://jsonplaceholder.typicode.com/todos').subscribe((response: any) => {
        this.todosService.setTodos(response);
        this.saveTodosToLocalStorage(response);
      });
    }
  }

  private saveTodosToLocalStorage(todos: Todo[]) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  public updateLocalStorageTodo() {
    const todos = this.todosService.getTodos();
    this.saveTodosToLocalStorage(todos);
  }
}
