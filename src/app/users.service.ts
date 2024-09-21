import { Injectable } from "@angular/core";
import { User } from "./users-list/users-list.component";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: "root"})

export class UsersService {
    private usersSubject$ = new BehaviorSubject<User[]>([]); //указываем дженерик тип
    users$ = this.usersSubject$.asObservable();
    // users: User[] = [];

    setUsers(users: User[]) {
        // this.users = users;
        this.usersSubject$.next(users)
    }

    editUser(editedUser: User) {
        // this.users = this.users.map(
        //     user => {
        //         if (user.id === editedUser.id) {
        //             return editedUser
        //         } else {
        //             return user
        //         }
        //     }
        // )
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

    createUser(user: User) {
        // this.users = [...this.users, user]
        this.usersSubject$.next(
            [...this.usersSubject$.value, user]
        )
    }

    deleteUser(id: number) {
        // this.users = this.users.filter(
        //     item => item.id !== id
        // )
        this.usersSubject$.next(
            this.usersSubject$.value.filter(
                item => item.id !== id
            )
        )
    }
}
