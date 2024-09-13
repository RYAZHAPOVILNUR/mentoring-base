import { NgFor, NgIf } from '@angular/common';
import { Component, inject, Injectable } from "@angular/core";
import { RouterLink } from '@angular/router';

const  aboutCompany = (item: string) => {
  return item 
}
const aboutCompanyResult = aboutCompany('О компании');

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink], 
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent {

  isShowCatalog = true;
  isShowBanner = true;

  MenuItems = ['Каталог', ' Стройматериалы',' Инструменты',' Электроника',' Интерьер и одежда']

  isUpperCase = true;

  changeMenuText () {
    this.MenuItems = this.MenuItems.map(
      (item: string) => this.isUpperCase ? item.toLowerCase(): item.toUpperCase()
      )
      this.isUpperCase = !this.isUpperCase
    }

  title = 'mentoring-first-project';
  readonly HeaderItem1 = 'Главная';
  readonly HeaderItem2 = aboutCompanyResult;
  readonly HeaderItem3 = 'Каталог';

  readonly BarItem1 = this.MenuItems [0];
  readonly BarItem2 = this.MenuItems [1];
  readonly BarItem3 = this.MenuItems [2];
  readonly BarItem4 = this.MenuItems [3];
  readonly BarItem5 = this.MenuItems [4];
  readonly BarLocation = 'Москва';

}
