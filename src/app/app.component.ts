import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const menuNameItem = (menuName: string) => {
  return menuName;
};

const newPages = [5, 4, 3, 2, 1];

const menuItems = [
  'Каталог',
  'Стройматериалы',
  'Инструменты',
  'Электрика',
  'Интерьер и одежда',
];

const upperCaseItems = menuItems.map((i) => i.toUpperCase());
const lowerCaseItems = menuItems.map((i) => i.toLowerCase());

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mentoring-first-project';

  isShowMain = true;
  isShowMainPicture = true;
  isUpperCase = false;

  upperCaseItems = upperCaseItems;
  lowerCaseItems = lowerCaseItems;

  newPages = newPages;
  readonly header_item_1 = 'Главная';
  readonly aboutCompany = menuNameItem('О компании');
  readonly header_item_3 = 'Каталог';
}
