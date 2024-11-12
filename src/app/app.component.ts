import { NgFor, NgIf } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { __values } from 'tslib';

// 1 задание 

const func = (value: string) => {return value}

const aboutCompany: string = 'О компании';

const vuzov = func(aboutCompany);

//  3 задание

const newPages: number[] = [5, 4, 3, 2, 1]

// 4 задание

const secondMenuItem = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']

const upperCaseSecondMenuItem = secondMenuItem.map (
  (item) => {
    return item.toUpperCase();
  }
)

console.log(upperCaseSecondMenuItem);


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {

  title = 'mentoring-first-project';

  isShowBigPicture = true;
  
  readonly headerItem1 = 'Главная';
  
  readonly headerItem2 = 'О компании';
  
  readonly aboutCompany = vuzov;

  readonly headerItem3 = 'Каталог';
  
  readonly newPages: number[] = newPages;
  
  secondMenuItem : string[] = upperCaseSecondMenuItem;

  isUpperCase : boolean = true;

  changeMenuText() : void {
    this.secondMenuItem = upperCaseSecondMenuItem.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase 
  }

} 


