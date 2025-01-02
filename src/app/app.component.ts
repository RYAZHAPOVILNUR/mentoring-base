import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';


const nameMenuItem = (name: string) => {
  return name;
};

const name = nameMenuItem('О компании');


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';

  readonly headerItem1 = 'Главная';
  readonly headerItem2 = 'О компании';
  readonly headerItem3 = 'Каталог';
  
  menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']

  isUpperCase = true;

  changeMenuText() {
    this.menuItems = this.menuItems.map(item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase());

    this.isUpperCase = !this.isUpperCase;
  }

  aboutCompany = name;
  isShow = true;

  newPages = [5, 4 ,3, 2, 1];

  
}
