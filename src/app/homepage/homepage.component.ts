import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ NgIf, NgFor ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  title = 'mentoring-first-project';

  isShowBanner = true;

  menuItems = upperCaseMenuItems;

  readonly newPages = [5, 4, 3, 2, 1];

  isUpperCase = true;
  changeMenuText() {
    this.menuItems = menuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase
  }
}

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']
const upperCaseMenuItems = menuItems.map((item) => item.toUpperCase())
