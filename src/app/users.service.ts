import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "./user-interface";

@Injectable({providedIn: "root"})
export class UsersService {
    private usersSubject$ = new BehaviorSubject<User[]>([]);
    users$ = this.usersSubject$.asObservable();

    setUsers(users: User[]) {
        this.usersSubject$.next(users);
    }

    editUser(editedUser: User) {
        this.usersSubject$.next(
            this.usersSubject$.value.map(
                users => {
                    if (users.id === editedUser.id) {
                        return editedUser
                    } else {
                        return users
                    }
                }
            )
        )
    }

    createUser(user: User) {
        const existingUser = this.usersSubject$.value.find(
            currentElement => currentElement.email === user.email
        )

        if (existingUser !== undefined) {
            alert('Такой email уже зарегистрирован');
        } else{
            this.usersSubject$.next(
                [...this.usersSubject$.value, user]
            );
            alert('Пользователь успешно добавлен')
        }

        
    }

    deleteUser(id: number) {
        this.usersSubject$.next(
            this.usersSubject$.value.filter(
                user => {
                    if (id === user.id) {
                        return false
                    } else {
                        return true
                    }
                }
            )
        )
    }
}