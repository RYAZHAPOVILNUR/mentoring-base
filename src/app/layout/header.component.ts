import { Component } from "@angular/core";
import { NgFor, NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";


const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']

const upperCaseMenuItems = menuItems.map(
  (item) => {
    return item.toUpperCase();
  }
)


const function1 = (menuItem: string) => (menuItem);

const menuItem2 = function1('О компании');



@Component(
    {
        selector: "app-layout-header",
        templateUrl: "./header.component.html",
        styleUrl: "./header.component.scss",
        standalone: true,
        imports: [NgFor, NgIf, RouterLink]
    }
)
export class HeaderComponent {
  
    isShowCatalog = true;
  
  
    readonly aboutCompany = menuItem2;
    
    readonly headerItem1 = 'Главная';
  
    readonly headerItem3 = 'Каталог';
  
    readonly header2Item1 = 'Каталог';
  
    readonly header2Item2 = 'Стройматериалы';
  
    readonly header2Item3 = 'Инструменты';
  
    readonly header2Item4 = 'Электрика';
  
    readonly header2Item5 = 'Интерьер и одежда';
  
    menuItems = upperCaseMenuItems;
  
    isUpperCase = true;
  
  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map(
      (item) => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
  
    this.isUpperCase = !this.isUpperCase
  }
  
  
  
  }