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
  constructor(private userService: UserService) {}

  loginAsAdmin(): void {
    this.userService.loginAsAdmin();
    alert('Вы вошли в систему как админ');
  }

  loginAsUser(): void {
    this.userService.loginAsUser();
    alert('Вы вошли в систему как пользователь');
  }

  logout(): void {
    this.userService.logout();
    alert('Вы вышли из системы');
  }

  isAdmin(): boolean {
    return this.userService.getIsAdmin();
  }
}