import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class usersService {
  readonly snackbar = inject(MatSnackBar);

  private usersSubject$ = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject$.asObservable();



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
      (currentUser) => currentUser.email === user.email
    );

    if (userIsExisting) {
      this.snackbar.open('Такой пользователь уже существует', 'Ок', {
        duration: 3000,
      })
    } else {
      this.usersSubject$.next([...this.usersSubject$.value, user]);
      this.snackbar.open(`Пользователь ${user.name} был создан`, 'Ок', {
        duration: 3000
      })
    }
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((user) => {
        if (user.id === id) {
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
