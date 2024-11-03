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
  constructor(private authUserService: AuthUserService) {}

  loginAsAdmin() {
    this.authUserService.loginAsAdmin();
    alert('Вы вошли как администратор');
  }

  loginAsUser() {
    this.authUserService.loginAsUser();
    alert('Вы вошли как ползователь');
  }

  logout() {
    this.authUserService.logout();
    alert('Вы выщли из системы');
  }

  isAdmin(): boolean {
    return this.authUserService.getIsAdmin();
  }
}
