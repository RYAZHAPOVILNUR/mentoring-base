import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user-interfaces';
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

  editUser(editedUser: User) {
    this.usersSubject$.next(
      this.usersSubject$.value.map((user) =>
        user.id === editedUser.id ? editedUser : user
      )
    );
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((item) => item.id !== id)
    );
  }

  createUser(user: User) {
    if (!this.existingUser(user.email)) {
      this.usersSubject$.next([...this.usersSubject$.value, user]);
    } else {
      console.warn(`User with email ${user.email} already exists.`);
    }
  }

  existingUser(email: string): boolean {
    return this.usersSubject$.value.some((user) => user.email === email);
  }
}