// @ts-ignore

import {NgFor, NgIf} from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// const names = ['Angular', 'React', 'Vue', 'JS', 'Cplusplus', 'Ruby'];
//
// const upperCaseNames = names.map(
//   (name) => {
//     return name.toUpperCase();
//   })
// console.log(upperCaseNames)

const myString:string = 'О компании';

function getString(str: string) {
  return str;
}

const newString = (getString(myString));

const newPages = [5,4,3,2,1];

// isUpperCase = true;
//
// changeMenuText() {
//   this.menuItems = upperCaseMenuItems.map(
//     item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
//   )
//   this.isUpperCase = !this.isUpperCase
// }
//
// const upperCaseHeaderItems = headerItems.map((item) => item.toUpperCase())




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

   headerAddonItem1 = ' Каталог ';

   headerAddonItem2 = 'Стройматериалы';

   headerAddonItem3 = 'Инструменты';

   headerAddonItem4 = 'Электрика';

   headerAddonItem5 = 'Интерьер и одежда';

   headerAddonItems = [this.headerAddonItem1 , this.headerAddonItem2 , this.headerAddonItem3 , this.headerAddonItem4 , this.headerAddonItem5]

  isUpperCase = true;

  changeMenuText() {
    this.headerAddonItems = this.headerAddonItems.map(
      (item) => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );

    this.isUpperCase = !this.isUpperCase
  }

  title = 'mentoring-first-project';

  isShowCatalog = true;

  isShowBanner:boolean = true;

  headerItem1 = 'Главная';

  readonly headerItem2 = 'О компании';

  readonly headerItem3 = 'Каталог';

  readonly newString = newString;

  protected readonly newPages = newPages;
}

