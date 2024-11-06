import {inject, Injectable} from "@angular/core";
import {UsersApiService} from "../api-services/users-api.service";
import {User} from "../interfaces/user.interface";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class UsersListService {
  usersApiService = inject(UsersApiService)

  private usersSubject = new BehaviorSubject<User[]>([]);
  users$: Observable<User[]> = this.usersSubject.asObservable()

  constructor() {
    this.usersApiService.getUsers().subscribe(users => {

      this.usersSubject.next(users);
    })
  }
  createUser(user: any) {
    console.log(user, 'user')
    this.usersSubject.next([...this.usersSubject.value, user]);
  }
  deleteUser(id: number){
    this.usersSubject.next( this.usersSubject.value.filter((user) =>  user.id !== id))
  }

  updateUser( userArg: any) {
    this.usersSubject.next(this.usersSubject.value.map((user) => user.id === userArg.id ? userArg : user));
  }

}
