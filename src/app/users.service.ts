import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "./users-list/users-list.component";

@Injectable({providedIn: 'root'})
export class UsersService {
    private usersSubject$ = new BehaviorSubject<User[]>([]);
    users$ = this.usersSubject$.asObservable();

    setUsers(users: User[]) {
        this.usersSubject$.next(users);
    }

    
    editUser(editedUser: User) {
        this.usersSubject$.next(
            this.usersSubject$.value.map(
                user => {
                    return (user.id === editedUser.id) ? editedUser : user;

                }
            )   
        )
    }


    createUser(user: User){
        const userIsExiting = this.usersSubject$.value.find(
            (currentElement) => currentElement.email === user.email
        );
        
        if (userIsExiting !== undefined) {
            alert('Такой пользователь уже зарегестрирован');
        } else {
            this.usersSubject$.next([...this.usersSubject$.value, user]);
            alert('Новый пользователь успешно добавлен')
        }
    }


    deleteUser(id: number) {
        this.usersSubject$.next(
            this.usersSubject$.value.filter(user => {
                return user.id !== id;
              }
            )
        )
      }
      
}