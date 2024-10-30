import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgFor, NgIf} from "@angular/common";



function returnString(arg: string): string {
  return arg;
}
const punctName = returnString("О компании");
const newPages =  [5,4,3,2,1];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isShow = false;
  isUpperCase = false;

  readonly main = 'Главная';
  readonly aboutUs = 'О компании';
  readonly catalog = 'Каталог';
  readonly buildingMaterials = 'стройматериалы';
  readonly tools = 'Инструменты';
  readonly electrics = "Электрика";
  readonly interior ='Интерьер и одежда';

  readonly aboutCompany = punctName;

  newPages = newPages

  menuItems = [
    'Каталог', 'стройматериалы',
    'Инструменты',  "Электрика", 'Интерьер и одежда',
  ]

  changeMenuText() {
    this.menuItems = this.menuItems.map(menuItem => this.isUpperCase ? menuItem.toUpperCase() : menuItem.toLowerCase());
    this.isUpperCase = !this.isUpperCase;
  }


}
