import { inject, Injectable, OnInit } from '@angular/core';
import { User } from '../components/home/users-list/user-interface';
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
    const localStorageUsers = this.localStorage.getUsersFromLocalStorage('users');
  
    if (localStorageUsers && localStorageUsers.length > 0) {
      this.usersSubject$.next(localStorageUsers.slice(0, 10));
    } else {
      this.userApiService.getUsers().subscribe((data) => {
        this.usersSubject$.next(data);
        this.localStorage.saveUsersToLocalStorage(data);
      });
    }
  }
  
  // loadUsers() {
  //   const localStorageUsers =
  //     this.localStorage.getUsersFromLocalStorage('users');

  //   if (localStorageUsers) {
  //     this.usersSubject$.next(localStorageUsers.slice(0, 10));
  //   }
  // }

  // public loadTodos() {
  //   const localStorageTodos =
  //     this.localStorage.getTodosFromLocalStorage('todos');

  //   if (localStorageTodos) {
  //     this.todosSubject$.next(localStorageTodos.slice(0, 10));
  //   }
  // }

  public createUser(user: User) {
    const existingUser = this.usersSubject$.value.find(
      (currentElement) => currentElement.email === user.email
    );
    if (existingUser !== undefined) {
      alert('ТАКОЙ ЕМЕЙЛ УЖЕ ЗАРЕГИСРИРОВАН');
    }
    alert('ЮЗЕР УСПЕШНО СОЗДАН');
    const newUser = [...this.usersSubject$.value, user];
    this.localStorage.saveUsersToLocalStorage(newUser);
    this.usersSubject$.next(newUser);
  }

  public editUser(editedUser: User) {
    const editUser = this.usersSubject$.value.map((user) => {
      if (user.id === editedUser.id) {
        return editedUser;
      }
      return user;
    });
    this.usersSubject$.next(editUser);
    this.localStorage.saveUsersToLocalStorage(this.usersSubject$.value);
  }

  public deleteUser(id: number) {
    const updatedUsers = this.usersSubject$.value.filter(
      (user) => user.id !== id
    );
    this.usersSubject$.next(updatedUsers);
    this.localStorage.saveUsersToLocalStorage(this.usersSubject$.value);
  }

  // public updateLocalStorageUsers() {
  //   const users = this.usersSubject$.value;
  //   this.localStorage.saveUsersToLocalStorage(users);
  // }
}

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
