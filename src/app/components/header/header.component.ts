import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const func = (date: string) => {return date}

const itemName: string = "О компании"

const vuzov = func (itemName)

const newPages:number[] = [5, 4, 3, 2, 1]

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']

const upperCaseMenuItems = menuItems.map(
  (item) => {
    return item.toUpperCase();
  }
  )

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isShowCatalog = true;

  readonly headerItem1 = 'Главная';

  readonly headerItem3 = 'Католог';

  readonly aboutCompany = vuzov;

  menuItems:string[] = upperCaseMenuItems;

  isUpperCase = true;
  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase
  }
}
