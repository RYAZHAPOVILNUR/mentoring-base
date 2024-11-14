import {inject, Injectable} from '@angular/core';
import {CreateUser, User} from '../interfaces/user-interface';
import {BehaviorSubject} from 'rxjs';
import {UsersApiService} from './usersApi.service';
import {LocalStorageService} from './local-storage.service';

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
    this.setUsers(newUser);
  }

  public editUser(editedUser: User) {
    const editResult = this.usersSubject$.value.map((user) =>
      user.id === editedUser.id ? editedUser : user
    )
    this.setUsers(editResult);
  }

  public deleteUser(id: number) {
    const deleteResult = this.usersSubject$.value.filter((user) => user.id !== id)
    this.setUsers(deleteResult);
  }
}
