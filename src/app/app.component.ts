import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];

const paginationNumbers = [1, 2, 3, 4, 5];
const paginationNumberReverse = paginationNumbers.reverse();


function getMenuItem(name: string): string {
  return name;
}


const aboutCompany = getMenuItem('О компании');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'mentoring-first-project';

  isShowCatalog: boolean = false;
  isBigImage: boolean = true;
  isLowerCase: boolean = true;
  readonly headerItem1: string = 'Главное';
  readonly headerItem3: string = 'Каталог';


  readonly aboutCompany: string = aboutCompany;

  upperCaseMenuItem: string[] = menuItems;
  menuItemCase() {
    this.upperCaseMenuItem = this.upperCaseMenuItem.map(item => 
      this.isLowerCase ? item.toUpperCase() : item.toLowerCase()
    );
    this.isLowerCase = !this.isLowerCase;
  }
  newPages: number[] = paginationNumberReverse;
}
