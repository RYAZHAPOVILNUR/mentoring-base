import { Injectable } from "@angular/core";
import { User } from "./interfaces/user.interface";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn:'root'})
export class UsresService {
    usersSubject$ = new BehaviorSubject<User[]>([])
    users: User [] = [];
    

    setUsers(users: User []) {
        // this.users = users;
        this.usersSubject$.next(users)
    }

    editUser(editeUser: User) {
        // this.users = this.users.map(
        //     user => {
        //         if (user.id === editeUser.id) {
        //             return editeUser
        //         } else {
        //             return user
        //         }
        //     }
        // )

        this.usersSubject$.next(
            this.usersSubject$.value.map(
                user => {
                    if (user.id === editeUser.id) {
                        return editeUser
                    } else {
                        return user
                    }
                }
            )
        )
        
    }

    creatUser(user: User) {
        // this.users = [ ...this.users, user]
        this.usersSubject$.next (
            [...this.usersSubject$.value, user]
        ) 

    }

    deleteUser(id: number) {
        // this.users = this.users.filter(
        //     // @ts-ignore
        //     item => {
        //         if (id === item.id) {
        //             return false   
        //         }   
        //             else {
        //                 return true
        //             }
        //     }
        // )

        this.usersSubject$.next (
            this.usersSubject$.value.filter(
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
        )

    } 

}