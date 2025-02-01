import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const menuItems: string[] = [
  'Каталог',
  'Стройматериалы',
  'Инструменты',
  'Электрика',
  'Интерьер и одежда',
];

const upperCaseMenuItems: string[] = menuItems.map((item: string): string => {
  return item.toUpperCase();
});

const newPages: number[] = [5, 4, 3, 2, 1];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ NgFor, NgIf, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isShowCatalog = false;

  isShowImg: boolean = true;

  readonly headerItem1 = 'Главная';

  readonly headerItem3 = 'Каталог';

  readonly header2Item1 = upperCaseMenuItems[0];

  readonly header2Item2 = 'Cтройматериалы';

  readonly header2Item3 = 'Инструменты';

  readonly header2Item4 = 'Электрика';

  readonly header2Item5 = 'Интерьер и одежда';

  readonly aboutCompany = 'О компании';

  readonly newtab = 'Пользователи';

  readonly todos = "Задачи"

  readonly newPages: number[] = newPages;

  menuItems: string[] = upperCaseMenuItems;

  isUpperCase = true;

  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map((item) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );

    this.isUpperCase = !this.isUpperCase;
  }
}
