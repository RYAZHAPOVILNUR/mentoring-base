import { Injectable } from '@angular/core';
import { User } from './components/users/user-interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  
  usersSubject = new BehaviorSubject<User[]>([]);
  users: User[] = [];

  setUsers(users: User[]) {
    this.users = users;
    this.usersSubject.next(users);
  }

  editUser(editedUser: User) {
    this.usersSubject.next(
      this.usersSubject.value.map((user) => {
        if (user.id === editedUser.id) {
          return editedUser;
        } else {
          return user;
        }
      })
    );
  }

  createUser(user: User) {

    this.usersSubject.next([...this.usersSubject.value, user]);
  }

  deleteUser(id: number) {
    this.usersSubject.next(
      this.usersSubject.value.filter((item) => {
        if (id === item.id) {
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
