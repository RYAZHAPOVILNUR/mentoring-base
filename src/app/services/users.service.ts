import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UserRole } from "../interfaces/users-interface";


@Injectable({ providedIn: 'root' })
export class UsersService {
  private userSubject$ = new BehaviorSubject< UserRole | null>(null);

  public readonly user$ = this.userSubject$.asObservable();

  private user: UserRole = {
    name: 'Nika',
    email: 'Nika@gmail.com',
    isAdmin: null,
  };

  public loginAsAdmin() {
    this.userSubject$.next({ ...this.user, isAdmin: true });
  }

  public loginAsUser() {
    this.userSubject$.next({ ...this.user, isAdmin: false });
  }

  public get isAdmin() {
    return this.userSubject$.value?.isAdmin;
  }

  public get isLogged() {
    return this.userSubject$.value !== null;
  }

  public logOut() {
    this.userSubject$.next(null);
  }
}