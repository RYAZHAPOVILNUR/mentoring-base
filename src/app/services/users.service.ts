import { inject, Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersApiService } from './api-services/users-api.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public readonly usersApiService = inject(UsersApiService);
  private usersSubject$ = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject$.asObservable();
  private snakeBarMessageSubject$ = new BehaviorSubject<string>('');
  message$ = this.snakeBarMessageSubject$.asObservable();
  private _snackBar = inject(MatSnackBar);

  setUsers(users: User[]) {
    this.usersSubject$.next(users);
  }

  editUser(editedUser: User) {
    this.usersSubject$.next(
      this.usersSubject$.value.map((user) => {
        if (user.id === editedUser.id) {
          return editedUser;
        }
        return user;
      })
    );
    this.showSnackBarMessage('Пользователь успешно редактирован');
  }

  createUser(user: User) {
    const existingUser = this.usersSubject$.value.find(
      (currentElement) => currentElement.email === user.email
    );

    if (existingUser !== undefined) {
      this.showSnackBarMessage('Такой email уже существует!');
    } else {
      this.usersSubject$.next([...this.usersSubject$.value, user]);
      this.showSnackBarMessage('Новый пользователь успешно добавлен');
    }
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((user) => user.id !== id)
    );
    this.showSnackBarMessage('Пользователь успешно удален');
  }

  showSnackBarMessage(message: string) {
    this.snakeBarMessageSubject$.next(message);
    this.message$.subscribe((message) => {
      this._snackBar.open(message, 'Close', { duration: 3000 });
    });
  }
}
