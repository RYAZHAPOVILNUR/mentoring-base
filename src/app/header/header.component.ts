import { NgFor, NgIf } from '@angular/common';
import { Component, inject, Injectable } from "@angular/core";
import { RouterLink } from '@angular/router';

const funcl = (aboutCompany: string) => {
  return (aboutCompany)
}
funcl('О компании');

@Component({
      selector: 'app-header',
      standalone: true,
      imports: [NgFor, NgIf, RouterLink], 
      templateUrl: './header.component.html',
      styleUrl: './header.component.scss',
})

export class HeaderComponent {
  
  isShowCatalog = true; 
  isUppercase = true;

  readonly headerItemFirst = 'Главная';
  aboutCompany = 'O компании';
  headerItemThird = 'Каталог';
  headerTwoItemFirst = 'Каталог';
  headerTwoItemSecond = 'Стройматериалы';
  headerTwoItemThird = 'Инструменты';
  headerTwoItemFourth = 'Электрика';
  headerTwoItemFifth = 'Интерьер и одежда';

  menuItems = ['Каталог', 'Стройматериалы',  'Инструменты', 'Электрика', 'Интерьер и одежда'];
  upperCaseMenuItems = this.menuItems;
  isUpperCase = true;
  changeMenuText() {
    this.menuItems = this.upperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase
  }
}
    





