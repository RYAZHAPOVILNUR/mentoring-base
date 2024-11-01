import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthUserService } from '../../../services/auth-user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-admin-checking-page',
  standalone: true,
  imports: [NgIf, MatButtonModule, MatTooltipModule],
  templateUrl: './admin-checking-page.component.html',
  styleUrl: './admin-checking-page.component.scss',
})
export class AdminCheckingPageComponent {
  constructor(private userService: AuthUserService) {}
  private readonly router = inject(Router);

  loginAsAdmin() {
    this.userService.loginAsAdmin();
    alert('Logged in as admin');
  }

  loginAsUser() {
    this.userService.loginAsUser();
    alert('Logged in as user');
  }

  logout() {
    this.userService.logout();
    alert('Logged out of system');
  }

  isAdmin(): boolean {
    return this.userService.getIsAdmin();
  }
}
