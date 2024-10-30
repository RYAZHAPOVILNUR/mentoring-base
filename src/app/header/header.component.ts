import { NgFor, NgIf, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeartYellowDirective } from '../directives/heart-yellow.directive';
import { SvgIconComponent } from '../app-svg-icon.component';
import { YellowDirective } from '../directives/yellow.directive';

const funcl = (aboutCompany: string) => {
  return aboutCompany;
};
funcl('О компании');

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink,
    DatePipe,
    HeartYellowDirective,
    SvgIconComponent,
    YellowDirective,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isShowCatalog = true;
  isUppercase = true;

  readonly date = new Date();

  readonly headerItemFirst = 'Главная';
  aboutCompany = 'O компании';
  headerItemThird = 'Каталог';
  headerTwoItemFirst = 'Каталог';
  headerTwoItemSecond = 'Стройматериалы';
  headerTwoItemThird = 'Инструменты';
  headerTwoItemFourth = 'Электрика';
  headerTwoItemFifth = 'Интерьер и одежда';

  menuItems = [
    'Каталог',
    'Стройматериалы',
    'Инструменты',
    'Электрика',
    'Интерьер и одежда',
  ];
  upperCaseMenuItems = this.menuItems;
  isUpperCase = true;
  changeMenuText() {
    this.menuItems = this.upperCaseMenuItems.map((item) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }
}