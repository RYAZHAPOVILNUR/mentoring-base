import { Injectable } from "@angular/core";
import { User } from "./users-list/user-interface";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class UsersService {
  private usersSubject$ = new BehaviorSubject<User[]>([]);
  usersObservable$: Observable<User[]> = this.usersSubject$.asObservable();

  public setUsers(users: User[]) {
    this.usersSubject$.next(users);
  }

  public editUser(editedUser: User) {
      this.usersSubject$.next(
        this.usersSubject$.value.map(
          user => (user.id === editedUser.id ? editedUser : user)
        )
      )
  }

  public createUser(user: User) {
    const existingUser = this.usersSubject$.value.find(
      currentElement => currentElement.email === user.email)

    console.log(existingUser);

    if(existingUser !== undefined) {
      alert('ТАКОЙ EMAIL УЖЕ ЗАРЕГИСТРИРОВАН')
    } else {
      this.usersSubject$.next(
        [...this.usersSubject$.value, user]);
        alert('НОВЫЙ ПОЛЬЗОВАТЕЛЬ УСПЕШНО ДОБАВЛЕН')
    }
  }

  public deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter(user => id === user.id ? false : true)
    )
  }
}
