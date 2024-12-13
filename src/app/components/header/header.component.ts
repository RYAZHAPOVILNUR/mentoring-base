import { Component, inject, Injectable } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { HomepageComponent } from '../homepage/homepage.component';
import { RouterLink } from '@angular/router';
import { PhoneNumber } from '../../Pipes/phone-number.pipe';

const menuItems: string[] = [
  'Каталог',
  'Стройматериалы',
  'Инструменты',
  'Электрика',
  'Интерьер и одежда',
];

const upperCaseMenuItems: string[] = menuItems.map((item: string): string => {
  return item.toUpperCase();
});
const user = {};
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, DatePipe, PhoneNumber],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  number = '+7(965)084-29-29';
  today: Date = new Date();
  title = 'mentoring-first-project';
  isShowCatalog = true;
  readonly headerItem1 = 'Главная';
  readonly aboutCompany = 'О компании';
  readonly headerItem3 = 'Каталог';
  readonly header2Item1: string = upperCaseMenuItems[0];
  isShowMujik = true;
  menuItems: string[] = upperCaseMenuItems;
  isUpperCase: boolean = true;
  changeMenutext(): void {
    this.menuItems = upperCaseMenuItems.map((item) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }
}
