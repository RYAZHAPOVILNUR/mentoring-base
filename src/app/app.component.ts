import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, Header],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'mentoring-first-project';
  readonly headerItem1: string = 'Главная';
        // readonly headerItem2: string = 'О компании';
        // headerItem2: string = aboutCompany;
        // headerItem2;
  headerItem2 = aboutCompany;
  readonly headerItem3: string = 'Каталог';
        // headerItems = upperCaseHeaderItems;
  isShowCatalog = true;

  isShowBanner = true;

        // readonly headerNavItem1 = 'Каталог';
        // readonly headerNavItem2 = 'Стройматериалы';
        // readonly headerNavItem3 = 'Инструменты';
        // readonly headerNavItem4 = 'Электрика';
        // readonly headerNavItem5 = 'Интерьер и одежда';

        // readonly headerNavItem1 = upperCaseMenuItems[0];
        // readonly headerNavItem2 = upperCaseMenuItems[1];
        // readonly headerNavItem3 = upperCaseMenuItems[2];
        // readonly headerNavItem4 = upperCaseMenuItems[3];
        // readonly headerNavItem5 = upperCaseMenuItems[4];

  menuItems = upperCaseMenuItems;

        // menuItems = menuItems;

  readonly newPages = [5, 4, 3, 2, 1];

  isUpperCase = true;
  changeMenuText() {
    this.menuItems = menuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase
  }
}

const headerItems = ['Главная', 'О компании', 'Каталог']
const upperCaseHeaderItems = headerItems.map((item) => item.toUpperCase())

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']
const upperCaseMenuItems = menuItems.map((item) => item.toUpperCase())
// console.log(upperCaseMenuItems)

const headerItem2 = ['О компании'];
const aboutCompany = headerItem2.map((item) => item[0].toUpperCase() + item.slice(1));
// console.log(aboutCompany);

// const aboutCompany2 = (item) => {
//   headerItem2 = item;
//   return item;
// }
// console.log(aboutCompany2('О компании'))

const func = (data: string) => {return data};
const itemAbout: string = 'О компании';
const about = func(itemAbout);

