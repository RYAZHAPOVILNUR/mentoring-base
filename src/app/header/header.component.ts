import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BasketDirective } from '../directives/basket.directive';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';
import { UserService } from '../servises/user.service';

const menuItems = [
  'Каталог',
  'Стройматериалы',
  'Инструменты',
  'Электрика',
  'Интерьер и одежда',
];

const upperCaseMenuItems = menuItems.map((item) => {
  return item.toUpperCase();
});

const aboutCompany = (item: string) => {
  return item;
};
const result = aboutCompany('О компании');

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink,
    DatePipe,
    MatIconModule,
    BasketDirective,
    AsyncPipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly dialog = inject(MatDialog);
  public readonly userService = inject(UserService);

  today: Date = new Date();
  title = 'mentoring-base';
  isShowCatalog = true;

  readonly headerItem1 = 'Главная';
  readonly aboutCompany = 'О компании';
  readonly headerItem3 = 'Каталог';
  readonly header2Item2 = 'Стройматериалы';
  readonly header2Item3 = 'Инструменты';
  readonly header2Item4 = 'Электрика';
  readonly header2Item5 = 'Интерьер и одежда';
  menuItems = upperCaseMenuItems;

  isUpperCase = true;
  currentdt: any;

  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map((item) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: '400px',
      height: '200px',
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'admin') {
        this.userService.loginIsAdmin();
      } else if (result === 'user') {
        this.userService.loginIsUser();
      } else return undefined;
    });
  }

  public logout() {
    if (confirm('Вы точно хотите выйти?')) {
      console.log('Совершили loqout');
      return this.userService.logout();
    } else return false;
  }
}
