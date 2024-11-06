import { inject, Injectable } from '@angular/core';
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
    const localStorageUsers =
      this.localStorage.getUsersFromLocalStorage('users');

    if (localStorageUsers) {
      this.usersSubject$.next(localStorageUsers);
    }
    this.userApiService.getUsers().subscribe((data) => {
      this.usersSubject$.next(data.slice(0, 10));
      this.localStorage.saveUsersToLocalStorage('users', data);
    });
  }

  public updateLocalStorageUsers() {
    const users = this.usersSubject$.value;
    this.localStorage.saveUsersToLocalStorage('users', users);
  }

  createUser(user: User) {
    const existingUser = this.usersSubject$.value.find(
      (currentElement) => currentElement.email === user.email
    );
    if (existingUser !== undefined) {
      alert('ТАКОЙ ЕМЕЙЛ УЖЕ ЗАРЕГИСРИРОВАН');
    }
    alert('ЮЗЕР УСПЕШНО СОЗДАН');
    const newUser = [...this.usersSubject$.value, user];
    this.localStorage.saveUsersToLocalStorage('user', newUser);
    this.usersSubject$.next(newUser);
  }

  editUser(editedUser: User) {
    const editUser = this.usersSubject$.value.map((user) => {
      if (user.id === editedUser.id) {
        return editedUser;
      }
      return user;
    });
    this.localStorage.saveUsersToLocalStorage('users', editUser);
    this.usersSubject$.next(editUser);
  }

  deleteUser(id: number) {
    const findUser = this.usersSubject$.value.find((user) => user.id === id);
    const deleteUser = this.usersSubject$.value.filter(
      (user) => user.id === id
    );

    if (
      findUser &&
      confirm(
        'Вы точно хотите удалить карточку пользователя ' + findUser.name + '?'
      )
    ) {
      this.localStorage.saveUsersToLocalStorage('users', deleteUser);
      this.usersSubject$.next(deleteUser);
    }
  }
}

  // getUsers(): User[] {
  //   return this.usersSubject$.value;
  // }

  // setUsers(users: User[]) {
  //   this.usersSubject$.next(users.slice(0, 10));
  // }