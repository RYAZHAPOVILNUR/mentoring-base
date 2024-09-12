import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const getMenuItemName = (name: string) => name;
const aboutCompanyName = getMenuItemName('О компании');

const newPages = [5, 4, 3, 2, 1];
const menuItems = [
  'Каталог',
  'Стройматериалы',
  'Инструменты',
  'Электрика',
  'Интерьер и одежда',
].map((item) => item.toUpperCase());

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mentoring-first-project';
  aboutCompany = aboutCompanyName;
  isShowPhoto = true;
  newPages = newPages;
  isUpperCaseText = true;
  menuItems = menuItems;

  changeMenuText() {
    this.menuItems = menuItems.map((item) =>
      this.isUpperCaseText ? item.toLowerCase() : item.toUpperCase()
    );

    this.isUpperCaseText = !this.isUpperCaseText;
  }
}
