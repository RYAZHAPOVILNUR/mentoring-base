import {Injectable} from "@angular/core";
import {User} from "../interfaces/user.interface";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class UsersListService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  public users$: Observable<User[]> = this.usersSubject.asObservable()

  public setUsers(users: User[]) {
    this.usersSubject.next(users);
  }

  public createUser(user: User) {
    this.usersSubject.next([...this.usersSubject.value, user]);
  }

  public deleteUser(id: number) {
    this.usersSubject.next(this.usersSubject.value.filter((user) => user.id !== id))
  }

  public editUser(updateUser: User) {
    this.usersSubject.next(this.usersSubject.value.map((user) => user.id === updateUser.id ? updateUser : user));
  }
}
