import { NgFor, NgIf } from "@angular/common";
import { Component} from "@angular/core";
import { RouterLink } from "@angular/router";



const aboutCompanyFn = (text: string) => text;
const aboutCompany = aboutCompanyFn('Окомпании');

const menuItems = [
  'Каталог',
  'Стройматериалы',
  'Инструменты',
  'Электрика',
  'Интерьер и одежда',
];

const upperCaseMenuItems: string[] = menuItems.map((item: string): string => {
  return item.toUpperCase();
});

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent {

  isShowCatalog = true;

  readonly headerItem1 = 'Главная';
  readonly headerItem2 = 'О компании';
  readonly headerItem3 = 'Каталог';



  readonly header2Item1 = 'Каталог';
  readonly header2Item2 = 'Стройматериалы';
  readonly header2Item3 = 'Инструменты';
  readonly header2Item4 = 'Электрика';
  readonly header2Item5 = 'Интерьер и одежда';



  readonly aboutCompany = aboutCompany;

  menuItems: string[] = upperCaseMenuItems;

  isUpperCase: boolean = true;

  changeMenuText(): void {
    this.menuItems = upperCaseMenuItems.map((item) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }
}
