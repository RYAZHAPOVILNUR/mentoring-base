import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IUser } from "../interfaces/user.interface";

@Injectable({ providedIn: 'root' })
export class UsersService {
    
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
            alert('Такой Email уже зарегестрирован')
        } else {
            this.usersSubject$.next([...this.usersSubject$.value, user])
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