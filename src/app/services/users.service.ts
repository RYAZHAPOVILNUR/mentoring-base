import { inject, Injectable, OnInit } from '@angular/core';
import { User, CreateUser } from '../components/home/users-list/user-interface';
import { BehaviorSubject } from 'rxjs';
import { UsersApiService } from '../usersApi.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private usersSubject$ = new BehaviorSubject<User[]>([]);
  public readonly users$ = this.usersSubject$.asObservable();
  readonly localStorage = inject(LocalStorageService);
  readonly userApiService = inject(UsersApiService);

  loadUsers() {
    const localStorageUsers =
      this.localStorage.getFromLocalStorage<User[]>('users');
    if (localStorageUsers) {
      this.usersSubject$.next(localStorageUsers.slice(0, 10));
    } else {
      this.userApiService.getUsers().subscribe((data) => {
        const users = data.slice(0, 10);
        this.setUsers(users);
      });
    }
  }

  setUsers(users: User[]) {
    this.usersSubject$.next(users);
    this.localStorage.saveToLocalStorage('users', users);
  }

  public createUser(user: CreateUser) {
    const existingUser = this.usersSubject$.value.find(
      (currentElement) => currentElement.email === user.email
    );
    if (existingUser !== undefined) {
      alert('ТАКОЙ ЕМЕЙЛ УЖЕ ЗАРЕГИСРИРОВАН');
    }
    alert('ЮЗЕР УСПЕШНО СОЗДАН');
    const newUser = [...this.usersSubject$.value, user];
    this.usersSubject$.next(newUser);
    this.localStorage.saveToLocalStorage(
      'users',
      this.usersSubject$.value
    );
  }

  public editUser(editedUser: User) {
    this.usersSubject$.next(
      this.usersSubject$.value.map((user) =>
        user.id === editedUser.id ? editedUser : user
      )
    );
    this.localStorage.saveToLocalStorage(
      'users',
      this.usersSubject$.value
    );
    this.updateLocalStorageUsers();
  }

  public deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((user) => user.id !== id)
    );

    this.localStorage.saveToLocalStorage(
      'users',
      this.usersSubject$.value
    );
    this.updateLocalStorageUsers();
  }

  public updateLocalStorageUsers() {
    const users = this.usersSubject$.value;
    this.localStorage.saveToLocalStorage('users', users);
  }
}

// loadUsers() {
//   const localStorageUsers =
//     this.localStorage.getUsersFromLocalStorage('users');

//   localStorageUsers
//     ? this.usersSubject$.next(localStorageUsers.slice(0, 10))
//     : this.userApiService.getUsers().subscribe((data) => this.setUsers(data));
// }

// public loadTodos() {
//   const localStorageTodos =
//     this.localStorage.getTodosFromLocalStorage('todos');

//   if (localStorageTodos) {
//     this.todosSubject$.next(localStorageTodos.slice(0, 10));
//   }
// }

// public updateLocalStorageUsers() {
//   const users = this.usersSubject$.value;
//   this.localStorage.saveUsersToLocalStorage(users);
// }

// loadUsers() {
//   const localStorageUsers =
//     this.localStorage.getUsersFromLocalStorage('users');

//   if (localStorageUsers) {
//     this.usersSubject$.next(localStorageUsers);
//   }
//   this.userApiService.getUsers().subscribe((data) => {
//     this.localStorage.saveUsersToLocalStorage('users', data);
//     this.usersSubject$.next(data.slice(0, 10));
//   });
// }

// deleteUser(id: number) {
//   const updatedUsers = this.usersSubject$.value.filter((user) => user.id !== id);
//   this.usersSubject$.next(updatedUsers);
//   this.localStorage.saveUsersToLocalStorage('users', updatedUsers); // Save the updated list to local storage
// }

// getUsers(): User[] {
//   return this.usersSubject$.value;
// }

// setUsers(users: User[]) {
//   this.usersSubject$.next(users.slice(0, 10));
// }

// deleteUser(id: number) {
//   this.usersSubject$.next(
//     this.usersSubject$.value.filter((el) => {
//       if (id === el.id) {
//         return false;
//       }
//         return true;
//     })
//   );
//   this.localStorage.saveUsersToLocalStorage('users', id);
// }
