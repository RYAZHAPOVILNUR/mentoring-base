import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "./users-list/users-list.interface";
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable ({providedIn: 'root'})
export class UsersService {
    private usersSubject$ = new BehaviorSubject<User[]>([])
    users$ = this.usersSubject$.asObservable();
    
    constructor(private snackBar: MatSnackBar) {}

    setUsers(users: User[]) {
        this.usersSubject$.next(users);
    }

    editUser(editUser: User) {
        this.usersSubject$.next(
            this.usersSubject$.value.map(
                users => users.id === editUser.id ? editUser: users));
        this.snackBar.open('Пользователь успешно обновлен', 'Закрыть',);
    }

    createUsers(user: User) {
    const existingUser = this.usersSubject$.value.find(
        (currentElement) => (currentElement.email) === (user.email)
    );

    if (existingUser !== undefined) {
        this.snackBar.open('ТАКОЙ EMAIL УЖЕ ЗАРЕГИСТРИРОВАН', 'Закрыть',);
      } else {
        this.usersSubject$.next([...this.usersSubject$.value, user]);
        this.snackBar.open('НОВЫЙ ПОЛЬЗОВАТЕЛЬ ДОБАВЛЕН', 'Закрыть',);
      }
    }

    deletedUsers(id: number) {
        this.usersSubject$.next (
            this.usersSubject$.value.filter(
                item => item.id !== id ));

        this.snackBar.open('ПОЛЬЗОВАТЕЛЬ УДАЛЕН', 'Закрыть',);
    }
}

