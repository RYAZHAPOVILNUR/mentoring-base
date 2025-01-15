import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authSubject$ = new BehaviorSubject<Auth[]>([]);
  private isAdminSubject$ = new BehaviorSubject<boolean>(false);
  public isAuthSubject$ = new BehaviorSubject<boolean>(false);

  get isAdminLoggedBox$() {
    return this.isAdminSubject$.value;
  }

  get auth$() {
    return this.authSubject$.asObservable();
  }

  setLocalStorageAuth(admin: Auth[]) {
    this.isAdminSubject$.next(true);
    this.authSubject$.next(admin);
  }

  loginAsUser(user: Auth) {
    this.authSubject$.next([user]);
    this.updateLocalStorage(this.authSubject$.value);
  }

  loginAsAdmin(admin: Auth) {
    this.authSubject$.next([admin]);
    this.updateLocalStorage(this.authSubject$.value);
  }

  exitAuth() {
    this.authSubject$.next([]);
    this.updateLocalStorage(null);
  }

  isAdmin() {
    if (
      this.authSubject$.value[0] !== undefined &&
      this.authSubject$.value[0] !== null
    ) {
      if (this.authSubject$.value[0].isAdmin) {
        this.isAdminSubject$.next(true);
        this.isAuthSubject$.next(true);
      } else {
        this.isAdminSubject$.next(false);
        this.isAuthSubject$.next(true);
      }
    }
  }

  updateLocalStorage(auth: Auth[] | null): void {
    localStorage.setItem('auth', JSON.stringify(auth));
  }
}
