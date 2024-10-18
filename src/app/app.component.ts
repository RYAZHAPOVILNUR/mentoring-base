import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];
const upperCaseMenuItems = menuItems.map(item => item.toUpperCase());

const setMenuName = (name: string) => name;
const aboutCompany = setMenuName('О компании')

const newPages = [5, 4, 3, 2, 1]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';
  isShowCatalog = true;
  isShowBanner = true;
  isUpperCase = true;
  menuItems = menuItems;
  upperCaseMenuItems = upperCaseMenuItems;
  newPages = newPages;

  changeMenuText() {
    this.menuItems = this.upperCaseMenuItems.map(
      (item) => {
        return this.isUpperCase ? item.toUpperCase() : item.toLowerCase()
      }
    )

    this.isUpperCase = !this.isUpperCase;
  }

  readonly headerItem1 = 'Главная';
  readonly aboutCompany = aboutCompany;
  readonly headerItem3 = 'Каталог';

  readonly header2Item1 = 'Каталог';
}
