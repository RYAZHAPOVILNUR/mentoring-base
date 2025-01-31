import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";


const AboutCompanyFunction = (text: string) => text;
const AboutCompany = AboutCompanyFunction('О Компании');
const NavItems = [
  'Каталог',
  'Стройматериалы',
  'Инструменты',
  'Электрика',
  'Интерьер и одежда',
];



const upperCaseMenuItems = NavItems.map((items) => {
  return items.toLowerCase();
});

@Component({
  selector: 'app-header',
  standalone: true,
  imports:[NgFor, NgIf,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})


export class HeaderComponent {
  changeMenuText() {
    this.NavItems2 = upperCaseMenuItems.map((NavItem) =>
      this.isUpperCase ? NavItem.toLowerCase() : NavItem.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }
  isShowCatalog = true;
  readonly AboutCompany1 = AboutCompany;
  readonly hiderItem1 = 'Главная';
  readonly hiderItem2 = 'О Компании';
  readonly hiderItem3 = 'Каталог';

  NavItems2 = upperCaseMenuItems;
 
  isUpperCase = true;
  readonly NavItems1 = NavItems;
}
