import { Injectable } from "@angular/core";
import { User } from "./users-list/users-list.component";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: "root"})

export class UsersService {
    private usersSubject$ = new BehaviorSubject<User[]>([]); //указываем дженерик тип
    users$ = this.usersSubject$.asObservable();

    setUsers(users: User[]) {
        this.usersSubject$.next(users)
    }

    editUser(editedUser: User) {
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
        const userIsExisting = this.usersSubject$.value.find(
            currentElement => currentElement.email === user.email
        )
        if(userIsExisting !== undefined){
            alert('EMAIL IS USED')
        }else{
            this.usersSubject$.next([...this.usersSubject$.value, user]);
            alert('NEW USER ADDED');
        }
    }

    deleteUser(id: number) {
        this.usersSubject$.next(
            this.usersSubject$.value.filter(
                item => item.id !== id
            )
        )
    }
}
