import { Injectable } from '@angular/core';
import { User } from './users-list.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  // deleteUser(id: number) {
  //     throw new Error('Method not implemented.');
  // }
  private usersSubject$ = new BehaviorSubject<User[]>([]);
  public users$ = this.usersSubject$.asObservable();

  setUsers(users: User[]) {
    this.usersSubject$.next(users);
  }

  editUser(editedUser: User) {
    this.usersSubject$.next(
      this.usersSubject$.value.map((user) => {
        if (user.id === editedUser.id) {
          return editedUser;
        } else {
          return user;
        }
      })
    );
  }
  createUser(user: User) {
    const userIsExisting = this.usersSubject$.value.find(
      (currentElement) => currentElement.email === user.email
    );
    console.log(userIsExisting);
    // this.usersSubject$.next([...this.usersSubject$.value, user]);

    if (userIsExisting !== undefined) {
      alert('Такой пользователь уже зареган');
    } else {
      this.usersSubject$.next([...this.usersSubject$.value, user]);
    }
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((item) => {
        if (id === item.id) {
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
