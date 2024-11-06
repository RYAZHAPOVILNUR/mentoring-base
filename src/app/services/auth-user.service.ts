import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  isLogged: boolean;
  isAdmin: boolean;
}

const initialUserState: User = { isLogged: false, isAdmin: false };

@Injectable({ providedIn: 'root' })
export class AuthUserService {
  userSubject = new BehaviorSubject<User>(initialUserState);
  // isLogged: false,
  // isAdmin: false,

  public loginAsAdmin(): void {
    localStorage.setItem('role', 'admin');
    localStorage.setItem('token', 'admin-token');
    this.userSubject.next({ isAdmin: true, isLogged: true });
  }

  public loginAsUser(): void {
    localStorage.setItem('role', 'user');
    localStorage.setItem('token', 'user-token');
    this.userSubject.next({ isAdmin: false, isLogged: true });
  }

  public isAdmin(): boolean {
    return this.userSubject.value.isAdmin;
  }

  public isLoggedIn(): boolean {
    return this.userSubject.value.isLogged;
  }

  public logout(): void {
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    this.userSubject.next({ isAdmin: false, isLogged: false });
  }

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
}
