import { Injectable } from "@angular/core";
import { IUsers } from "./users-list/users-list.component";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class UsersService {
    usersSubject = new BehaviorSubject<IUsers[]>([]);

    setUsers(users: IUsers[]) {
        this.usersSubject.next(users);
    }

    editUsers(editedUser: IUsers) {
        this.usersSubject.next(
            this.usersSubject.value.map(
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

    createUsers(user: IUsers) {
        this.usersSubject.next(
            [...this.usersSubject.value, user]
        )
    }

    deleteUsers(id: number) {
        this.usersSubject.next(
            this.usersSubject.value.filter(
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