import { Injectable } from "@angular/core";
import { User } from "./components/users/users.component";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class UsersService {
    private usersSubject$ = new BehaviorSubject<User[]>([]);
    users$ = this.usersSubject$.asObservable();
    
    setUsers(users: User []) {
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
            (currentElement) => currentElement.email === user.email
        );
         
        if (userIsExisting !== undefined) {
            alert('ТАКОЙ EMAIL УЖЕ ЗАРЕГИСТРИРОВАН');
        } else {
            this.usersSubject$.next([...this.usersSubject$.value, user]);
            alert('НОВЫЙ ПОЛЬЗОВАТЕЛЬ УСПЕШНО ДОБАВЛЕН');
        }
    }

    deleteUser(id: number) { 
        this.usersSubject$.next(
            this.usersSubject$.value.filter(
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