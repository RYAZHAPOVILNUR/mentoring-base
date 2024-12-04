import { NgIf, NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, NgFor,],
  templateUrl : './header.component.html',
  styleUrl : 'header.component.scss'
})

export class HeaderComponent {
  isShowCatalog = true;

  readonly headerItem1 = 'Главная';

  readonly headerItem2 = 'О';

  readonly headerItem3 = 'Каталог';

  readonly aboutCompany = nameHeader

  // isShowImg = true

  menuItems = upperCaseMenuItems;

  isUpperCase = true;

  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )

  this.isUpperCase = !this.isUpperCase
  }
}

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']

const upperCaseMenuItems = menuItems.map(
  (item) => {
    return item.toUpperCase();
  }
)

const func = (itemName: string) => {return itemName}

const nameHeader: string = 'О компании'

const vuzov = func(nameHeader)

const user = {
  name: 'Muaz',
  surname: 'Musaev',
  height: 175,
  weight: 68
}


// user.name = 'Petr'

console.log(user);
