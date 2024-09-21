import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Task 1
const getMenuItems = (menuItem: string) => menuItem;
const navItem = getMenuItems('О Компании');

// Task 3
const newPaginations = [5, 4, 3, 2, 1];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mentoring-first-project';

  isShowCatalog = true;
  isShowBigImage = true;
  isUpperCaseText = false;

  aboutCompany = navItem;

  newPages = newPaginations;

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
