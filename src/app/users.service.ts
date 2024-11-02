import { Injectable } from "@angular/core";
import { User } from "./users-list/users-list.component";
import { BehaviorSubject, find } from "rxjs";

@Injectable({providedIn: 'root'})
 
export class UsersService {
   private usersSubject$ = new BehaviorSubject<User[]>([]);
   public users$ = this.usersSubject$.asObservable();

    setUsers(users: User[]) {
      this.usersSubject$.next(users);
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

    creatUser(user: User) {   

        const userIsExisting = this.usersSubject$.value.find(
            (currenElement) => currenElement.email === user.email
        );
        if(userIsExisting !== undefined) {
            alert('ТАКОЙ EMAIL ЗАНЯТ')
        } else {
            this.usersSubject$.next(
                [...this.usersSubject$.value, user]
               )
        }


     this.usersSubject$.next(
      [...this.usersSubject$.value, user]
     )
    }

    deleteUser(id: number) {
            this.usersSubject$.next(
                this.usersSubject$.value.filter(
                item => {
                    if (id === item.id) {
                        return false
                    } else {
                        return true;
                    }
                }

                )
            )
    }

}