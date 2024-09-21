import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

// Task 1
const getMenuItems = (menuItem: string) => menuItem;
const navItem = getMenuItems('О Компании');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: 'header.component.scss',
  standalone: true,
  imports: [NgFor, NgIf],
})
export class HeaderComponent {
  title = 'mentoring-first-project';

  isShowCatalog = true;
  isUpperCaseText = false;

  aboutCompany = navItem;

  // Task 4
  bottomMenuItems = [
    'Стройматериалы',
    'Инструменты',
    'Электрика',
    'Интерьер и одежда',
  ];

  changeMenuText() {
    this.bottomMenuItems = this.bottomMenuItems.map((bottomMenuItem) => {
      return !this.isUpperCaseText
        ? bottomMenuItem.toUpperCase()
        : bottomMenuItem.toLowerCase();
    });
  }
}
