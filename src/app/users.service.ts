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
    }

    createUsers(user: User) {
        this.usersSubject$.next([...this.usersSubject$.value, user]);
    }

    deletedUsers(id: number) {
        this.usersSubject$.next (
            this.usersSubject$.value.filter(
                item => item.id !== id ));
    }
}

