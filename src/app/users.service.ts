import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "./users-list/users-list.interface";

@Injectable ({providedIn: 'root'})
export class UsersService {
    private usersSubject$ = new BehaviorSubject<User[]>([])
    users$ = this.usersSubject$.asObservable();
    
    setUsers(users: User[]) {
        this.usersSubject$.next(users);
    }

    editUsers(editUsers: User) {
        this.usersSubject$.next(
            this.usersSubject$.value.map(
                users => users.id === editUsers.id ? editUsers: users));
    }

    createUsers(user: User) {
        this.usersSubject$.next(
            [...this.usersSubject$.value, user]
        );
    }

    deletedUsers(id: number) {
        this.usersSubject$.next (
            this.usersSubject$.value.filter(
                item => item.id !== id ));
    }


}

