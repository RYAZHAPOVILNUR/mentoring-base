import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { YellowBgDirective } from '../directives/yellow-bg.directive';
import { UserService } from '../user.service';
import { IUserRole } from '../interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';
import { Router } from '@angular/router';

// Task 1
const getMenuItems = (menuItem: string) => menuItem;
const navItem = getMenuItems('О Компании');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: 'header.component.scss',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterOutlet,
    RouterLink,
    DatePipe,
    YellowBgDirective,
    AsyncPipe,
  ],
})
export class HeaderComponent {
  public readonly userService = inject(UserService);
  public readonly dialog = inject(MatDialog);
  public router = inject(Router);

  currentUser: IUserRole | null = null;
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

  public changeMenuText() {
    this.bottomMenuItems = this.bottomMenuItems.map((bottomMenuItem) => {
      return !this.isUpperCaseText
        ? bottomMenuItem.toUpperCase()
        : bottomMenuItem.toLowerCase();
    });
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: '400px',
      height: '200px',
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'admin') {
        this.userService.loginAsAdmin();
      } else if (result === 'user') {
        this.userService.loginAsUser();
      } else return undefined;
    });
  }

  public logout() {
    if (confirm('Вы точно хотите выйти?')) {
      this.router.navigate(['/']);
      return this.userService.logout();
    }
    return false;
  }
}
