import { DatePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { YellowCartDirective } from '../directives/yellow-cart.directive';

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
  imports: [NgFor, RouterLink, DatePipe, YellowCartDirective],
})
export class HeaderComponent {
  public aboutCompany = aboutCompanyName;
  private isUpperCaseText = true;
  public menuItems = menuItems;
  public currentDate = new Date();

  public changeMenuText() {
    this.menuItems = menuItems.map((item) =>
      this.isUpperCaseText ? item.toLowerCase() : item.toUpperCase()
    );

    this.isUpperCaseText = !this.isUpperCaseText;
  }
}
