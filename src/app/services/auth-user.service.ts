import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AuthService {
  isAdmin: boolean = false;
  name!: string;
  email!: string;

  constructor() {}

  loginAsAdmin() {
    this.isAdmin = true;
    this.name = 'admin';
    this.email = 'adminMail'
  }

  loginAsUser() {
    this.isAdmin = false;
    this.name = 'user'
    this.email = 'userMail'
  }
}
