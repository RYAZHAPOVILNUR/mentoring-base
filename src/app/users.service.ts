import { Injectable } from '@angular/core';
import { User } from './users-list/user-interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private usersSubject$ = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject$.asObservable();

  setUsers(users: User[]) {
    this.usersSubject$.next(users);
  }

  getUsers(): User[] {
    return this.usersSubject$.value;
  }

  editUser(EditedUser: User) {
    this.usersSubject$.next(
      this.usersSubject$.value.map((user) => {
        if (user.id === EditedUser.id) {
          return EditedUser;
        } else {
          return user;
        }
      })
    );
  }

  

  createUser(user: User) {
    const existingUser = this.usersSubject$.value.find(
      (currentElement) => currentElement.email === user.email
    );
    console.log(existingUser);

    if (existingUser !== undefined) {
      alert('ТАКОЙ ЕМЕЙЛ УЖЕ ЗАРЕГИСРИРОВАН');
    } else {
      alert('ЮЗЕР УСПЕШНО СОЗДАН');
      this.usersSubject$.next([...this.usersSubject$.value, user]);
    }
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((el) => {
        if (id === el.id) {
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
