import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export interface User {
name: string;
email: string
isAdmin: boolean | null;
}

@Injectable({ providedIn: 'root' })
export class AuthUserService {
  private readonly userSubject$ = new BehaviorSubject<User | null>(null);
  public readonly users$ = this.userSubject$.asObservable();
  private readonly router = inject(Router)

  private user: User = {
    name: 'Ilnur',
    email: 'Ryazhapov',
    isAdmin: null,
  }

  public loginAsAdmin(): void {
    // localStorage.setItem('role', 'admin');
    // localStorage.setItem('token', 'admin-token');
    this.userSubject$.next({...this.user, isAdmin: true});
  }

  public loginAsUser(): void {
    // localStorage.setItem('role', 'user');
    // localStorage.setItem('token', 'user-token');
    this.userSubject$.next({...this.user, isAdmin: false});
  }

  get isAdmin() {
    return this.userSubject$.value?.isAdmin;
  }

  public logout(): void {
    // localStorage.removeItem('role');
    // localStorage.removeItem('token');
    this.userSubject$.next(null);
    this.router.navigate([''])
    console.log(this.userSubject$.value);
  }
}

  // isLogged: false,
  // isAdmin: false,

// ngOnInit(): void {
//   this.isAdmin = this.checkAdminStatus();
//   this.isLoggedIn = this.checkLoginStatus();  }

// private checkAdminStatus(): boolean {
//   return localStorage.getItem('role') === 'admin';
// }

// private checkLoginStatus(): boolean {
//   return localStorage.getItem('token') !== null;
// }

// public getIsAdmin(): boolean {
//   return this.isAdmin;
// }

// public getIsLoggedIn(): boolean {
//   return this.isLoggedIn;
// }

// public setIsAdmin(value: boolean): void {
//   this.isAdmin = value;
// }

// public setIsLoggedIn(value: boolean): void {
//   this.isLoggedIn = value;
// }