import { Injectable } from "@angular/core";
import { User } from "./user.interface.ts";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class UsersService {
    private usersSubject$ = new BehaviorSubject<User[]>([])
    users$ = this.usersSubject$.asObservable()

    setUsers (users: User[]) {
        this.usersSubject$.next(users)
    }
    deleteUser(id: number) {
        this.usersSubject$.next(
            this.usersSubject$.value.filter(
            (item) => (item.id !== id)
            )
        )
    }
    editUser(editUser: User) {
        this.usersSubject$.next(    
            this.usersSubject$.value.map(
                user => {
                    if (user.id === editUser.id) {
                        return editUser
                    } else {
                        return user
                    }
                }
            )
        )
    }
    createUser(user: User) {
        const isUserForm = this.usersSubject$.value.find(
            item => item.email === user.email
        )
        if (isUserForm) {
            alert('такой email уже есть');
        } else {
            this.usersSubject$.next([...this.usersSubject$.value, user]);
        }
    }
}