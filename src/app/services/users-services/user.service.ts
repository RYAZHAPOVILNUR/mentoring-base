import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private _userSubject$ = new BehaviorSubject<{ isLogged: boolean; isAdmin: boolean }>({
    isLogged: false,
    isAdmin: false,
  });

  public get userSubject$() {
    return this._userSubject$.asObservable();
  }

  public loginAsAdmin() {
    this._userSubject$.next({ isAdmin: true, isLogged: true });
  }

  public loginAsUser() {
    this._userSubject$.next({ isAdmin: false, isLogged: true });
  }

  public isAdmin(): boolean {
    return this._userSubject$.value.isAdmin ?? false;
  }

  public isLogged(): boolean {
    return this._userSubject$.value.isLogged ?? false;
  }

  public logout() {
    this._userSubject$.next({ isAdmin: false, isLogged: false });
  }
}