import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


const navMenuItem = (item: string) => {
  return 'О компании'
}
console.log(navMenuItem(''))

const newArrow = [5, 4, 3, 2, 1]

const menuItems: string[] = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']

const upperCaseMenuItems: string[] = menuItems.map(
  (item: string): string => {
    return item.toUpperCase();
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
  title = 'mentoring-first-project';

  imagePath = '/assets/banner.png'

  isShowImg = true

  isShowCatalog = true

  isChangeText = true

  isUppeerCase = true

  menuItems = upperCaseMenuItems[0]
  
  readonly headerItem1 = 'Главная'

  readonly aboutCompany = navMenuItem('')

  readonly headerItem3 = 'Каталог'

  readonly header2Item1 = 'Каталог'

  readonly header2Item2 = 'Стройматериалы'

  readonly header2Item3 = 'Инструменты'

  readonly header2Item4 = 'Электрика'

  readonly header2Item5 = 'Интерьер и одежда'

  readonly newPages = newArrow

  changeMenuText() :void {
    this.menuItems = upperCaseMenuItems.map(
      item => this.isUppeerCase ? item.toLowerCese() : item.toUpperCese()
    )
    this.isUppeerCase = !this.isUppeerCase
  }

}

const names = ['ilnur', 'sveta', 'beslan', 'ruslan'] 

names.forEach(
  (name) => {
    console.log(name)
  }
)

console.log(names);


