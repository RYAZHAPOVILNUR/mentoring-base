import { Component } from '@angular/core';
import { UserService } from '../services/users-services/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private userService: UserService) { }

  loginAsAdmin(): void {
    this.userService.loginAsAdmin();
    alert('Logged in as Admin');
  }

  loginAsUser(): void {
    this.userService.loginAsUser();
    alert('Logged in as User');
  }

  logout(): void {
    this.userService.logout();
    alert('Logged out');
  }

  isAdmin(): boolean {
    return this.userService.isAdmin();
  }
}