import { NgFor, NgIf, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeartYellowDirective } from '../directives/heart-yellow.directive';
import { SvgIconComponent } from '../app-svg-icon.component';
import { YellowDirective } from '../directives/yellow.directive';
import { UserService } from '../services/users-services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginDialogComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink,
    DatePipe,
    HeartYellowDirective,
    SvgIconComponent,
    YellowDirective,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private _snackBar = inject(MatSnackBar);
  readonly dialog = inject(MatDialog);
  readonly userService = inject(UserService);
  readonly router = inject(Router);

  get isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  isShowCatalog = true;
  isUppercase = true;
  readonly date = new Date();

  readonly headerItemFirst = 'Главная';
  aboutCompany = 'O компании';
  readonly headerItemThird = 'Каталог';
  readonly headerTwoItemFirst = 'Каталог';
  readonly headerTwoItemSecond = 'Стройматериалы';
  readonly headerTwoItemThird = 'Инструменты';
  readonly headerTwoItemFourth = 'Электрика';
  readonly headerTwoItemFifth = 'Интерьер и одежда';

  menuItems = [
    'Каталог',
    'Стройматериалы',
    'Инструменты',
    'Электрика',
    'Интерьер и одежда',
  ];

  upperCaseMenuItems = this.menuItems.slice();
  isUpperCase = true;

  changeMenuText() {
    this.menuItems = this.upperCaseMenuItems.map((item) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 3000 });
  }

  public checkIsAdmin() {
    if (!this.userService.isAdmin()) {
      this.openSnackBar('Страница доступна только для админа', 'Ок');
    }
  }

  public logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

  public openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent);
    dialogRef.afterClosed().subscribe((res) => {
      if (res === 'user') {
        this.userService.loginAsUser();
      } else {
        this.userService.loginAsAdmin();
      }
    });
  }
}