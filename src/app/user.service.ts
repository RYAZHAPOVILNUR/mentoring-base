import { Injectable } from "@angular/core";
import { Users } from "./users";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })

export class UserService {
    usersSubject$ = new BehaviorSubject<Users[]>([]);
    users$ = this.usersSubject$.asObservable();

    setUser(users: Users[]) {
        this.usersSubject$.next(users);
    }

    editUser(editedUser: Users) {
        this.usersSubject$.next(
            this.usersSubject$.value.map(user =>
                editedUser.id === user.id ? editedUser : user
            )
        )
    }

    createUser(user: Users) {
        const existingUser = this.usersSubject$.value.find(
            item => item.email === user.email
        )

        if (existingUser) {
            return undefined;
        }
        else {
            this.usersSubject$.next(
                [...this.usersSubject$.value, user]
            );
        }
    }

    deleteUser(id: number) {
        this.usersSubject$.next(
            this.usersSubject$.value.filter(
                item => id !== item.id
            )
        )
    }
}
