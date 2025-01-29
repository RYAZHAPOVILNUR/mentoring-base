import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

 

const func1 = (name: string) => { return name }
const item = func1('О компании')

const newPages = [5, 4, 3, 2, 1]

const menyItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];
const upperCaseMenyItems = menyItems.map (
  (item) => {
    return item.toUpperCase()
  }
)
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first'; 

  newPages = newPages;

  bigCartina = true;
  
  isShowCatalog = true;

  readonly headerItem1 = 'Главная';

  readonly aboutCompany = item;

  readonly headerItem3 = 'Каталог';
  menyItems = upperCaseMenyItems
  isUpperCase = true;

  changeMenyText() {
    this.menyItems = upperCaseMenyItems.map (
      item => this.isUpperCase? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase
  }

}
