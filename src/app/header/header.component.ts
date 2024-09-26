import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const getMenuItemName = (name: string) => name;
const aboutCompanyName = getMenuItemName('О компании');

const menuItems = [
  'Каталог',
  'Стройматериалы',
  'Инструменты',
  'Электрика',
  'Интерьер и одежда',
].map((item) => item.toUpperCase());

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [NgFor, RouterLink],
})
export class HeaderComponent {
  aboutCompany = aboutCompanyName;
  isUpperCaseText = true;
  menuItems = menuItems;

  changeMenuText() {
    this.menuItems = menuItems.map((item) =>
      this.isUpperCaseText ? item.toLowerCase() : item.toUpperCase()
    );

    this.isUpperCaseText = !this.isUpperCaseText;
  }
}
