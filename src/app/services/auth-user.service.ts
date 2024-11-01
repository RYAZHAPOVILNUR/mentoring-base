import { Injectable } from '@angular/core';
import { AuthUser } from '../components/home/users-list/user-interface';
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}

  loginAsAdmin() {
    const user: AuthUser = {isAdmin: true};
    localStorage.setItem('user', JSON.stringify(user))
  }

  loginAsUser() {
    const user: AuthUser = {isAdmin: false};
    localStorage.setItem('user', JSON.stringify(user))
  }
}
