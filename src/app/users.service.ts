import { Injectable } from "@angular/core";
import { User } from "./users-list/users-list.component";

@Injectable({providedIn: 'root'})
export class UsersService {
    users: User[] = [];

    setUsers(users: User[]) {
        this.users = users
    }

    editUser(editedUser: User) {
        this.users = this.users.map(
            user => {
                if (user.id === editedUser.id) {
                    return editedUser
                } else {
                    return user
                }
            }
        )
    }

    createUser(user: User) {
        this.users = [...this.users, user]
    }

    deleteUser(id: number) {
        this.users = this.users.filter(user => user.id === id ? false : true)
    }
}