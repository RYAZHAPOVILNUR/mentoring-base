import { Injectable } from "@angular/core";
import { User } from "./users-list/users-list.component";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: "root"})
export class UsersService {
    usersSubject$ = new BehaviorSubject<User[]>([]);

    setUsers(users: User[]) {
        this.usersSubject$.next(users);
    }

    editUsers(editedUser: User) {
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

    createUsers(user: User) {
        this.usersSubject$.next(
            [...this.usersSubject$.value, user]
        )
    }

    deleteUsers(id: number) {
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