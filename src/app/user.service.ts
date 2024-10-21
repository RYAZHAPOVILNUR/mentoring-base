import { Injectable } from "@angular/core";
import { IUser } from "./users-list/users-list.component";
import { BehaviorSubject } from "rxjs";

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
        this.usersSubject$.next([...this.usersSubject$.value, user])
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