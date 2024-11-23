import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/users-services/auth.service';
import { ScrollButtonsComponent } from './scroll-buttons/scroll-buttons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    NgFor,
    HeaderComponent,
    ScrollButtonsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
 private authService = inject(AuthService);
 
  isShowSadMan = true;
  newPages = [5, 4, 3, 2, 1];

  loginAsAdmin() {
    this.authService.loginAsAdmin();
  }

  loginAsUser() {
    this.authService.loginAsUser();
  }

  logout() {
    this.authService.logout();
  }
}