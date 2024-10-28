import { Component } from "@angular/core";
import { RouterLink } from "@angular/router"; 
import { NgFor, NgIf } from "@angular/common";

const menuItems = ['Каталог', 'Стройматериалы','Инструменты', 'Электрика', 'Интерьер и одежда']

const upperCaseMenuItems = menuItems.map(
  (item) => {
    return item.toUpperCase()  
  }
)

const aboutCompany = (item : string) => { 
  return item;
}
const result = aboutCompany('О компании');

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title = 'mentoring-base';

  isShowCatalog = true;

  readonly headerItem1 = 'Главная';

  readonly aboutCompany = 'О компании';

  readonly headerItem3 = 'Каталог';

  readonly header2Item2 = 'Стройматериалы';

  readonly header2Item3 = 'Инструменты';

  readonly header2Item4 = 'Электрика';

  readonly header2Item5 = 'Интерьер и одежда';

  menuItems = upperCaseMenuItems;

  isUpperCase = true;

  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }
}


