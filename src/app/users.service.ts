import { Injectable } from "@angular/core";
import { User } from "./users-list/users-list.component";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: "root"})

export class UsersService {
    private usersSubject$ = new BehaviorSubject<User[]>([]); //указываем дженерик тип
    users$ = this.usersSubject$.asObservable();

    

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
        const userIsExisting = this.usersSubject$.value.find(
            currentElement => currentElement.email === user.email
        )
        // console.log(userIsExisting)
        if(userIsExisting !== undefined){
            alert('EMAIL IS USED')
        }else{
            this.usersSubject$.next([...this.usersSubject$.value, user]);
            alert('NEW USER ADDED');
        }
        // this.users = [...this.users, user]
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
