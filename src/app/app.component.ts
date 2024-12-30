import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


const navMenuItem = (item: string) => {
  return 'О компании'
}
console.log(navMenuItem(''))

const newArrow = [5, 4, 3, 2, 1]

const menuItems: string[] = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']

const upperCaseMenuItems: string[] = menuItems.map(
  (item: string) => {
    return item.toUpperCase();
  }
)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';

  imagePath = '/assets/banner.png'

  isShowImg = true

  isShowCatalog = true

  isChangeText = true

 

  menuItems: string[] = upperCaseMenuItems
  
  readonly headerItem1 = 'Главная'

  readonly aboutCompany = navMenuItem('')

  readonly headerItem3 = 'Каталог'

  readonly header2Item1: string = upperCaseMenuItems[0]

  readonly newPages = newArrow

  isUppeerCase = true

  changeMenuText() :void {
    this.menuItems = upperCaseMenuItems.map(
      item => this.isUppeerCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUppeerCase = !this.isUppeerCase
  }

}


