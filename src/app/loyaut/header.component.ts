import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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

const funcMain = (text: string) => text;
const textMain = 'Главная';

const funcAboutCompany = (text: string) => text;
const textAboutCompany = 'О компании';

const funcCatalog = (text: string) => text;
const textCatalog = 'Каталог';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isAboutCompany: boolean = true;
  isUpperCase: boolean = true;

  readonly main = funcMain(textMain);
  readonly aboutCompany = funcAboutCompany(textAboutCompany);
  readonly textCatalog = funcCatalog(textCatalog);

  menuItems = upperCaseMenuItems;

  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map((item) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    return (this.isUpperCase = !this.isUpperCase);
  }
}
