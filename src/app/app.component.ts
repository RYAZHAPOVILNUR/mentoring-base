import { NgFor, NgIf } from '@angular/common';
import { Text } from '@angular/compiler';
import { Component, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';


const AboutCompanyFunction = (text: string) => text;
const AboutCompany = AboutCompanyFunction('О Компании');
const newPages = [5, 4, 3, 2, 1]; 

const NavItems = [
  'Каталог',
  'Стройматериалы',
  'Инструменты',
  'Электрика',
  'Интерьер и одежда',
];

const upperCaseMenuItems = NavItems.map(
  (items) => {
    return items.toLowerCase();
  }
)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mentoring-first-project';

  changeMenuText() {
    this.NavItems2 = upperCaseMenuItems.map(
      (NavItem) =>
      this.isUpperCase ? NavItem.toLowerCase() : NavItem.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }

  NavItems2 = upperCaseMenuItems;
  isShowFoto = true;
  isShowCatalog = true;
  isUpperCase = true;
  readonly AboutCompany1 = AboutCompany;
  readonly newPages1 = newPages;
  readonly NavItems1 = NavItems;
  readonly hiderItem1 = 'Главная';
  readonly hiderItem2 = 'О Компании';
  readonly hiderItem3 = 'Каталог';
}
