import {Injectable} from "@angular/core";
import {User} from "../interfaces/user.interface";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class UsersListService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$: Observable<User[]> = this.usersSubject.asObservable()

  setUsers(users: User[]) {
    this.usersSubject.next(users);
  }

  createUser(user: User) {
    this.usersSubject.next([...this.usersSubject.value, user]);
  }

  deleteUser(id: number) {
    this.usersSubject.next(this.usersSubject.value.filter((user) => user.id !== id))
  }

  updateUser(userArg: User) {
    this.usersSubject.next(this.usersSubject.value.map((user) => user.id === userArg.id ? userArg : user));
  }
}
