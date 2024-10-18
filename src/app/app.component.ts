import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];

const upperCaseMenuItems = menuItems.map(item => item.toUpperCase())
console.log(upperCaseMenuItems)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';
  isShowCatalog = true;

  menuItems = upperCaseMenuItems;

  readonly headerItem1 = 'Главная';
  readonly headerItem2 = 'О компании';
  readonly headerItem3 = 'Каталог';
  readonly header2Item1 = 'Каталог';
}
