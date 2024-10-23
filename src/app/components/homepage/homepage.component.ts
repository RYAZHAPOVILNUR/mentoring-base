import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  isShowMujik = true;
  newPages = newPages;
}


// const aboutCompany: string = 'О компании' 

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((numbers) => {});
const newPages: number[] = [5, 4, 3, 2, 1];
// const menuItems: string[] = ['Каталог', 'Стройматериалы','Инструменты','Электрика','Интерьер и одежда']

// const upperCaseMenuItems: string[] = menuItems.map(
//     (item: string): string => {
//     return item.toUpperCase();
//     }
// )
// const user = {

// }