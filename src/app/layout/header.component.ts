import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const showCatalogCompany = (textMenu: string) => textMenu;
const text = showCatalogCompany('О компании');

const menuItems = ['Каталог', 'Стройматериалы', ' Инструменты', ' Электрика', ' Интерьер и одежда'];

const upperCaseMenuItems = menuItems.map(
  (item) => {
    return item.toUpperCase();
  }
)

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  title = 'mentoring-first-project';

  readonly aboutCompany = text;

  showCatalogCompany = false;

  isUpperCase = true;

  menuItems = upperCaseMenuItems;

  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )

    this.isUpperCase = !this.isUpperCase;
  }

  readonly headerItem1 = 'Главная';
  readonly headerItem2 = 'О компании';
  readonly headerItem3 = 'Каталог';

  readonly header2Item2 = 'Стройматериалы';
  readonly header2Item3 = 'Инструменты';
  readonly header2Item4 = 'Электрика';
  readonly header2Item5 = 'Интерьер и одежда';
}
