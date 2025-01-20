import { Injectable } from "@angular/core";
import { User } from "./interfaces/user.interface";

@Injectable({providedIn:'root'})
export class UsresService {
    users: User [] = [];

    setUsers(users: User []) {
        this.users = users;
    }

    editUser(editeUser: User) {
        this.users = this.users.map(
            user => {
                if (user.id === editeUser.id) {
                    return editeUser
                } else {
                    return user
                }
            }
        )
        
    }

    creatUser(user: User) {
        this.users = [ ...this.users, user]
    }

    deleteUser(id: number) {
        this.users = this.users.filter(
            // @ts-ignore
            item => {
                if (id === item.id) {
                    return false   
                }   
                    else {
                        return true
                    }
            }
        )

            } 

}