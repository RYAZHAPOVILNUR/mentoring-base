import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IUser } from "../interfaces/user.interface";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class UsersService {
    constructor(private snackBar: MatSnackBar) {}

    private usersSubject$ = new BehaviorSubject<IUser[]>([])
    users$ = this.usersSubject$.asObservable()

    setUsers(users: IUser[]) {
        this.usersSubject$.next(users)
    }

    editUsers(editedUser: IUser) {
        this.usersSubject$.next(
            this.usersSubject$.value.map(
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

    
    createUsers(user: IUser) {
        const userIsExisting = this.usersSubject$.value.find(
            (currentElement) => currentElement.email === user.email
        )

        if (userIsExisting !== undefined) {
            // alert('Такой Email уже зарегестрирован')
            this.snackBar.open('Такой Email уже зарегистрирован', 'Закрыть', {
                duration: 3000,
            })
        } else {
            this.usersSubject$.next([...this.usersSubject$.value, user])
            // alert('Новый пользователь успешно добавлен!')
            this.snackBar.open('Новый пользователь успешно добавлен!', 'Закрыть', {
                duration: 3000,
            })
        }
    }

    deleteUsers(id: number) {
        this.usersSubject$.next(
            this.usersSubject$.value.filter(
                item => {
                    if (id === item.id) {
                        return false
                    } else {
                        return true
                    }
                }
            )
        )
    }
}