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

    editUser(editUser: User) {
        this.usersSubject$.next(
            this.usersSubject$.value.map(
                users => users.id === editUser.id ? editUser: users));
    }

    createUsers(user: User) {
    const existingUser = this.usersSubject$.value.find(
        (currentElement) => (currentElement.email) === (user.email)
    );

    if (existingUser !== undefined) {
        alert('ТАКОЙ EMAil УЖЕ ЗАРЕГИСТРИРОВАН')
    }else {
        this.usersSubject$.next([...this.usersSubject$.value, user]) 
            alert('НОВЫЙ ПОЛЬЗОВАТЕЛЬ ДОБАВЛЕН')
        }
    }

    deletedUsers(id: number) {
        this.usersSubject$.next (
            this.usersSubject$.value.filter(
                item => item.id !== id ));
    }


}

