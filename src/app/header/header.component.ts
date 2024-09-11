import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import {RouterLink} from "@angular/router";

const menuItems = [
  {
    title: 'Главное',
    route: '/',
    isMainMenuItem: true,
  },
  {
    title: 'Админка',
    route: '/users',
    isMainMenuItem: true,
  },
  {
    title: 'Каталог',
    route: '/catalog',
    isMainMenuItem: true,
  },
  {
    title: 'Каталог',
    route: '/catalog',
    isMainMenuItem: false,
  },
  {
    title: 'Стройматериалы',
    route: '/construction-materials',
    isMainMenuItem: false,
  },
  {
    title: 'Инструменты',
    route: '/tools',
    isMainMenuItem: false,
  },
  {
    title: 'Электрика',
    route: '/electrics',
    isMainMenuItem: false,
  },
  {
    title: 'Интерьер и одежда',
    route: '/interior-and-clothing',
    isMainMenuItem: false,
  },
];

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [NgForOf, NgIf, RouterLink],
})
export class HeaderComponent {
  isShowCatalog: boolean = false;
  isLowerCase: boolean = true;

  readonly aboutCompany: string = 'О компании';

  mainMenuItems = this.getMainMenuItems();
  secondaryMenuItems = this.getSecondaryMenuItems();

  menuItemCase() {
    this.secondaryMenuItems = this.secondaryMenuItems.map((item) => ({
      ...item,
      title: this.isLowerCase ? item.title.toUpperCase() : item.title.toLowerCase(),
    }));
    this.isLowerCase = !this.isLowerCase;
  }

  private getMainMenuItems() {
    return menuItems.filter((item) => item.isMainMenuItem);
  }

  private getSecondaryMenuItems() {
    return menuItems.filter((item) => !item.isMainMenuItem);
  }
}
