import { Injectable } from '@angular/core';

interface User {
  isAdmin: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  loginAsAdmin(): void {
    const user: User = { isAdmin: true };
    localStorage.setItem('user', JSON.stringify(user));
  }

  loginAsUser(): void {
    const user: User = { isAdmin: false };
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User | null {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isAdmin(): boolean {
    const user = this.getUser();
    return user ? user.isAdmin : false;
  }
}