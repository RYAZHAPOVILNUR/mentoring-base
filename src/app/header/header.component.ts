import { NgFor, NgIf } from "@angular/common";
import { Component, Injectable } from "@angular/core";

const navMenuItem = (item: string) => {
    return 'О компании'
  }
  console.log(navMenuItem(''))

  const menuItems: string[] = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']

  const upperCaseMenuItems: string[] = menuItems.map(
    (item: string) => {
      return item.toUpperCase();
    }
  )

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: true,
    imports: [NgFor, NgIf]
})

export class HeaderComponent{
    isShowCatalog = true;

    isChangeText = true;

    readonly headerItem1 = 'Главная';

    readonly aboutCompany = navMenuItem('');
  
    readonly headerItem3 = 'Каталог';

    readonly header2Item1: string = upperCaseMenuItems[0];

    menuItems: string[] = upperCaseMenuItems;

    isUppeerCase = true;

    changeMenuText() :void {
        this.menuItems = upperCaseMenuItems.map(
          item => this.isUppeerCase ? item.toLowerCase() : item.toUpperCase()
        )
        this.isUppeerCase = !this.isUppeerCase
      }
}