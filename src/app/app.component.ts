import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const user = {
   name: 'Ruslan',
   surname: 'Kairat',
   height: 187,
   weight: 60
}

user.name = 'Yamada';

console.log(user);

const menuItems = 
  ['Каталог',
  'Стройматериалы',
  'Инструменты',
  "Электрика",
  'Интерьер и одежда'];

  const lowerCaseMenuItems = menuItems.map(
    (item) => {
      return item;
    }
  )

  const upperCaseMenuItems = menuItems.map(
    (item) => {
      return item.toUpperCase();
    }
  )

  


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';

  menuItems = 
  ['Каталог',
  'Стройматериалы',
  'Инструменты',
  "Электрика",
  'Интерьер и одежда'];


  isShowBanner = true;
  isUpperCase = true;

  

  readonly headerItem1 = 'Главная';
  readonly aboutCompany = 'О Компании';
  readonly headerItem3 = 'Каталог';

  

  readonly newPages = [5, 4, 3, 2, 1];

  menuItemsUpperCase = upperCaseMenuItems;

  menuItemsLowerCase = lowerCaseMenuItems;

  


}

