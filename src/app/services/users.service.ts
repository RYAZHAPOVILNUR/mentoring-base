import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { IUser } from "../interfaces/user";
import { UsersApiService } from "./users-api.service";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public usersApiService = inject(UsersApiService);
  public localStorage = inject(LocalStorageService)
  private usersSubject$ = new BehaviorSubject<IUser[]>([]);
  public readonly users$ = this.usersSubject$.asObservable();

  loadUsers() {
    const localStorageUsers = this.localStorage.getFromLocalStorage<IUser[]>('users');
    if (localStorageUsers && localStorageUsers.length > 0) {
      this.usersSubject$.next(localStorageUsers);
    } else {
      this.usersApiService.getUsers().subscribe((data: IUser[]) => {
        this.updateUsers(data)
      })
    };
  }

  updateUsers(users: IUser[]) {
    this.localStorage.saveToLocalStorage('users', users);
    this.usersSubject$.next(users);
  }

  editUsers(editUser: IUser) {
    const updatedUsers = this.usersSubject$.value.map(user => user.id === editUser.id ? editUser : user);
    this.usersSubject$.next(updatedUsers);
    this.updateUsers(updatedUsers);
  }

  createUser(user: IUser) {
      const newUser = ([...this.usersSubject$.value, user]);
      this.updateUsers(newUser);
  }

  deleteUser(id: number) {
      const deletedUser = this.usersSubject$.value.filter(user => user.id !== id);
      this.updateUsers(deletedUser)
  }

  getUsers(): IUser[] {
    return this.usersSubject$.value;
  }
}
