import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { YellowBgDirective } from '../directives/yellow-bg.directive';
import { UserService } from '../user.service';
import { IAdminUser } from '../interfaces/user.interface';

// Task 1
const getMenuItems = (menuItem: string) => menuItem;
const navItem = getMenuItems('О Компании');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: 'header.component.scss',
  standalone: true,
  imports: [NgFor, NgIf, RouterOutlet, RouterLink, DatePipe, YellowBgDirective],
})
export class HeaderComponent {
  readonly userService = inject(UserService);

  currentUser: IAdminUser | null = null;
  title = 'mentoring-first-project';

  isShowCatalog = true;
  isUpperCaseText = false;

  today: number = Date.now();

  aboutCompany = navItem;

  // Task 4
  bottomMenuItems = [
    'Стройматериалы',
    'Инструменты',
    'Электрика',
    'Интерьер и одежда',
  ];

  constructor() {
    this.userService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
  }

  changeMenuText() {
    this.bottomMenuItems = this.bottomMenuItems.map((bottomMenuItem) => {
      return !this.isUpperCaseText
        ? bottomMenuItem.toUpperCase()
        : bottomMenuItem.toLowerCase();
    });
  }

  loginAsAdmin() {
    this.userService.loginAsAdmin();
    console.log('Logged in as Admin:', this.userService.getCurrentUser());
  }

  loginAsUser() {
    this.userService.loginAsUser();
    console.log('Logged in as User:', this.userService.getCurrentUser());
  }

  clearUser() {
    this.userService.clearUser();
    console.log('User data is reset:', this.userService.getCurrentUser());
  }
}
