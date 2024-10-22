import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

const aboutCompanyFn = (text: string) => text;

const aboutCompany = aboutCompanyFn('О компании');

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];

const upperCaseMenuItems = menuItems.map(
  (item) => {
    return item.toUpperCase()
  }
)

const newPages = [5, 4, 3, 2, 1]
@Component({
  selector: 'app-main',
  standalone: true,
    imports: [
        NgForOf,
        NgIf
    ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  isShowCatalog = true;

  readonly headerNavItem1 = 'Главная';

  readonly headerNavItem2 = 'О компании';

  readonly headrerNavItem3 = 'Каталог';

  readonly aboutCompany = aboutCompany;

  menuItems = upperCaseMenuItems;

  isUpperCase = true;

  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )

    this.isUpperCase = !this.isUpperCase
  }

  isShowImg = true;

  newPages = newPages;

}
