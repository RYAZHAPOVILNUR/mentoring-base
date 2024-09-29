import { Injectable } from "@angular/core";
import { User } from "./user-list/user-list.component";
import { BehaviorSubject } from "rxjs";

@Injectable ({providedIn: 'root'})

export class UserService {
  private userSubject$ = new BehaviorSubject<User[]>([]);
  users$ = this.userSubject$.asObservable();

  setUsers (users: User[]) {
    this.userSubject$.next (users);
  }

  editUser (editedUser: User) {
    this.userSubject$.next(
      this.userSubject$.value.map(
        user => {
          if (user.id === editedUser.id) {
            return editedUser
            } else {
            return user
            }
          }  
      )
    )
  }


  createUser (user: User) {
    const existingUser = this.userSubject$.value.find(
      (currentElement) => currentElement.email === user.email
    );

    if (existingUser !== undefined) {
      alert ('Такой пользователь уже зарегистрирован'); 
    } else {
      this.userSubject$.next([...this.userSubject$.value, user]);
      alert ('Пользователь успешно добавлен');
    }
  }

  deleteUser (id: number) {
    this.userSubject$.next(
      this.userSubject$.value.filter(
        item => {
          if (id === item.id) {
            return false 
          } else {
            return true;}
        }  
      )
    )
  }
}
