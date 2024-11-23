import { NgFor, NgIf, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SvgIconComponent } from '../app-svg-icon.component';
import { YellowDirective } from '../directives/yellow.directive';
import { AuthService } from '../services/users-services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginDialogComponent } from '../login/login.component';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink,
    DatePipe,
    SvgIconComponent,
    YellowDirective,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private _snackBar = inject(MatSnackBar);
  readonly dialog = inject(MatDialog);
  readonly authService = inject(AuthService);
  readonly router = inject(Router);

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
    if (!this.authService.isAdmin) {
      this.openSnackBar('Страница доступна только для админа', 'Ок');
    }
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

  public openLoginDialog() {
   const dialogRef = this.dialog.open(LoginDialogComponent);
   dialogRef.afterClosed().subscribe((res) => {
     if (res === 'user') {
       this.authService.loginAsUser();
     } else if (res === 'admin') {
       this.authService.loginAsAdmin();
     } else {
       return;
     }
     this.router.navigate([''])
   });
 }
}