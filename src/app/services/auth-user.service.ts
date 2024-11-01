import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthUserService {
  private isAdmin: boolean = false;
  private isLoggedIn: boolean = false;

  constructor() {
    this.isAdmin = this.checkAdminStatus();
    this.isLoggedIn = this.checkLoginStatus();
  }

  private checkAdminStatus(): boolean {
    return localStorage.getItem('role') === 'admin';
  }

  private checkLoginStatus(): boolean {
    return localStorage.getItem('token') !== null;
  }

  public getIsAdmin(): boolean {
    return this.isAdmin;
  }

  public getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  public setIsAdmin(value: boolean) {
    this.isAdmin = value;
  }

  public setIsLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }

  public loginAsAdmin() {
    localStorage.setItem('role', 'admin');
    localStorage.setItem('token', 'admin-token');
    this.setIsAdmin(true);
    this.setIsLoggedIn(true);
  }

  public loginAsUser() {
    localStorage.setItem('role', 'user');
    localStorage.setItem('token', 'user-token');
    this.setIsAdmin(false);
    this.setIsLoggedIn(true);
  }

  public logout() {
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    this.setIsAdmin(false);
    this.setIsLoggedIn(false);
  }
}
