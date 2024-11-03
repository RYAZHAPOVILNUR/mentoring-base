import { inject, Injectable } from '@angular/core';
import { User } from '../components/home/users-list/user-interface';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { UsersApiService } from '../usersApi.service';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private userApiService = inject(UsersApiService);
  private usersSubject$ = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject$.asObservable();

  getUsers(): User[] {
    return this.usersSubject$.value;
  }

  setUsers(users: User[]) {
    this.usersSubject$.next(users);
  }

  createUser(user: User) {
    const existingUser = this.usersSubject$.value.find(
      (currentElement) => currentElement.email === user.email
    );
    console.log(existingUser);
    if (existingUser !== undefined) {
      alert('ТАКОЙ ЕМЕЙЛ УЖЕ ЗАРЕГИСРИРОВАН');
    }
    alert('ЮЗЕР УСПЕШНО СОЗДАН');
    this.usersSubject$.next([...this.usersSubject$.value, user]);
  }

  // this.localStorage.saveUsersToLocalStorage(user);

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((el) => {
        if (id === el.id) {
          return false;
        }
        return true;
      })
    );
  }

  editUser(EditedUser: User) {
    this.usersSubject$.next(
      this.usersSubject$.value.map((user) => {
        if (user.id === EditedUser.id) {
          return EditedUser;
        }
        return user;
      })
    );
  }
}
