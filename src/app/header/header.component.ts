import { Component } from '@angular/core';
import { DatePipe, NgForOf, NgIf } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";

const aboutCompanyFn = (text: string) => text;

const aboutCompany = aboutCompanyFn('О компании');

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];

const upperCaseMenuItems = menuItems.map(
  (item) => {
    return item.toUpperCase()
  }
)
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterOutlet,
    RouterLink,
    DatePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isShowCatalog = true;

  readonly headerNavItem1 = 'Главная';

  readonly headerNavItem2 = 'О компании';

  readonly headerNavItem3 = 'Каталог';

  readonly aboutCompany = aboutCompany;

  readonly today : Date = new Date()

  menuItems = upperCaseMenuItems;

  isUpperCase = true;

  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )

    this.isUpperCase = !this.isUpperCase
  }
}
