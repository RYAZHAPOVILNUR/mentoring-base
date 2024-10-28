import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { User } from "./users-list/users-list.component";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersSubject$ = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject$.asObservable()

  setUsers(users: User[]) {
    this.usersSubject$.next(users)
  }

  editUsers(editUser: User) {
    this.usersSubject$.next(
      this.usersSubject$.value.map(
        user => {
          if (user.id === editUser.id) {
            return editUser
          } else {
            return user
          }
        }
      )
    )
  }

  createUser(user: User) {
    const existingUser = this.usersSubject$.value.find(
      (currentElement) => currentElement.email === user.email
    )
    if(existingUser) {
      alert('Такой email уже зарегистрирован');
    } else {
      this.usersSubject$.next([...this.usersSubject$.value, user])
      alert('Новый пользователь успешно добавлен')
    }
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter(
        user => user.id !== id
      )
    )
  }
}
