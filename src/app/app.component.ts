import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RouterLink } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { AdminComponent } from './admin/admin.component';
import { UserService } from './services/users-services/user.service';
import { LoginDialogComponent } from './login/login.component';
import { ScrollButtonsComponent } from './scroll-buttons/scroll-buttons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    NgFor,
    RouterLink,
    HeaderComponent,
    UsersListComponent,
    AdminComponent,
    LoginDialogComponent,
    ScrollButtonsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private userService: UserService) {}
  isShowSadMan = true;
  newPages = [5, 4, 3, 2, 1];

  loginAsAdmin() {
    this.userService.loginAsAdmin('Админ', 'admin@gmail.com');
  }

  loginAsUser() {
    this.userService.loginAsUser('Юзер', 'user@gmail.com');
  }

  logout() {
    this.userService.logout();
  }
}