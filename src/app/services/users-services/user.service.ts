import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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

  public getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  public getIsAdmin(): boolean {
    return this.isAdmin;
  }

  public setIsAdmin(value: boolean): void {
    this.isAdmin = value;
  }

  public setIsLoggedIn(value: boolean): void {
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