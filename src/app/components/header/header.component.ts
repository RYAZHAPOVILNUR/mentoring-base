import { NgFor, NgIf, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomDatePipe } from '../../pipes/custom-date.pipe';
import { CustomNumberPfonePipe } from '../../pipes/phone-format.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, CustomDatePipe, CustomNumberPfonePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentDate = new Date();
  isShowCatalog = true;
  readonly HeaderItem1 = 'Главная';
  readonly aboutCompany = 'О компании';
  readonly HeaderItem3 = 'Каталог';

  isUpperCase = true;

  menuItems: string[] = [
    'Каталог',
    'Стройматериалы',
    'Инструменты',
    'Электрика',
    'Интерьер и одежда',
  ];

  upperCaseMenuItems = this.menuItems;

  constructor() {
    console.log(this.aboutCompany);
  }

  changeMenuText() {
    this.menuItems = this.upperCaseMenuItems.map((item: string) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }
}
