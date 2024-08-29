import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const newPages = [5, 4, 3, 2, 1];
const funcl = (aboutCompany: string) => {
  return (aboutCompany)
}
funcl('О компании');


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})

export class AppComponent {
  title = 'mentoring-first-project';

  newPages = newPages;

  isShowCatalog = true; 

  isShowSadMan = true;

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