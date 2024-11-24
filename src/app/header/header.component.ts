import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";
import { HomePageComponent } from "../home-page/home-page.component";

const menuItems = ['Кaталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда',]

const upperCaseMenuItems = menuItems.map(
  (item) => {
    return item.toUpperCase();
  }
)

const aboutCompany = 'О компании'

@Component({
    selector: 'app-header',
    standalone:  true,
    imports: [NgFor, NgIf, RouterLink, RouterModule,],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})

export class HeaderComponent {
    readonly aboutCompany = aboutCompany

    isShowaboutCompany = true;
  
    isShowCatalog = true;
  
    readonly headernav1 ='Главная';
  
    readonly headernav2 ='О компании';
  
    readonly headernav3 ='Кaталог';
  
  
    readonly header2nav1 = upperCaseMenuItems[0];
  
    readonly header2nav2 ='Стройматериалы';
  
    readonly header2nav3 ='Инструменты';
  
    readonly header2nav4 ='Электрика';
  
    readonly header2nav5 ='Интерьер и одежда';

    menuItems = upperCaseMenuItems
  
    isUpperCase = true
  
    changeMenuText() {
      this.menuItems = upperCaseMenuItems.map(
        item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
      )
  
      this.isUpperCase = !this.isUpperCase
    }
}