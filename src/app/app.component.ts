import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
 
const menuItems = ['Каталог', 'Стройматериалы','Инструменты', 'Электрика', 'Интерьер и одежда']

const upperCaseMenuItems = menuItems.map(
  (item) => {
    return item.toUpperCase()  }
)
console.log(upperCaseMenuItems);

const aboutCompany = (name : string) => {
  return name;
}
const result = aboutCompany('О компании');

const newPages = [5, 4, 3, 2, 1];








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

  isShowCatalog = !!false;

  isManOnPhoto = false;

  readonly headerItem1 = 'Главная';

  readonly aboutCompany = 'О компании';

  readonly headerItem3 = 'Каталог';

  readonly header2Item1 = upperCaseMenuItems[0]; 

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



