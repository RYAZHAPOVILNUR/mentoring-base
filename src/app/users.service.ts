import { Injectable } from "@angular/core";
import { User } from "./users-list/user-interface";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class UsersService {
    usersSubject = new BehaviorSubject<User[]>([]); 
    users$: Observable<User[]> = this.usersSubject.asObservable();  

    setUsers(users: User[]) {
        this.usersSubject.next(users);
    }

    editUser(editedUser: User) {
        this.usersSubject.next(
            this.usersSubject.value.map(
                user => user.id === editedUser.id ? editedUser : user
            )
        )
    }

    createUser(user: User) {
        const existingUser = this.usersSubject.value.find(
            (currentElement) => currentElement.email === user.email
        ); 

        console.log(existingUser); 

        if (existingUser) {
            alert('Такой Email уже есть') 
        } else {
            [this.usersSubject.next([...this.usersSubject.value, user])]; 
            alert('Новый пользователь успешно добавлен'); 
        }
    }

    deleteUser(id: number) {
        this.usersSubject.next(
            this.usersSubject.value.filter(
                item => id === item.id ? false : true 
            )            
        )
    }
}