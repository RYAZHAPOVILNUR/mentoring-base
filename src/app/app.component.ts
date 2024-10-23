import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';


const func1 = (value: string) => {
  return value;
};
const aboutCompany: string = 'О компании' 
func1(aboutCompany);
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((numbers) => {});
const newPages: number[] = [5, 4, 3, 2, 1];
const menuItems: string[] = ['Каталог', 'Стройматериалы','Инструменты','Электрика','Интерьер и одежда']

const upperCaseMenuItems: string[] = menuItems.map(
    (item: string): string => {
    return item.toUpperCase();
    }
)
const user = {

}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, RouterLink, HeaderComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  title = 'mentoring-first-project';
  isShowCatalog = true;
  readonly headerItem1 = 'Главная';
  readonly aboutCompany = 'О компании';
  readonly headerItem3 = 'Каталог';
  readonly header2Item1: string = upperCaseMenuItems[0];
  isShowMujik = true;
  readonly newPages: number[] = newPages;
  menuItems: string[] = upperCaseMenuItems
  isUpperCase: boolean = true;
  changeMenutext(): void {
    this.menuItems = upperCaseMenuItems.map(
        item => this.isUpperCase ? item.toLowerCase():item.toUpperCase()
)
this.isUpperCase = !this.isUpperCase
  }
}



