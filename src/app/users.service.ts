import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private usersSubject$ = new BehaviorSubject<User[]>([])
  users$ = this.usersSubject$.asObservable();

  setUsers(users: User[]){
    this.usersSubject$.next(users)
  }

  createUser(user: User){
    const userIsExisting = this.usersSubject$.value.find(currentUser => currentUser.email === user.email)
    
    if(userIsExisting === undefined){
      this.usersSubject$.next([...this.usersSubject$.value, user])
    } else {
      alert("Такой пользователь уже зарегистрирован")
    }
  }

  editUser(userChanged: User){
    this.usersSubject$.next(this.usersSubject$.value.map(user => user.id === userChanged.id ? userChanged : user))
  }

  deleteUser(id: number){
    this.usersSubject$.next([...this.usersSubject$.value.filter(user => user.id !== id)])
  }
}
