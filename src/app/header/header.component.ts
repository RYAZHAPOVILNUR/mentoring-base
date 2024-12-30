import { NgIf, NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl : './header.component.html',
  styleUrl : './header.component.scss'
})
export class HeaderComponent {
  isShowCatalog = true;

  readonly headerItem1 = 'Главная';

  readonly headerItem2 = 'О';

  readonly headerItem3 = 'Каталог';

  readonly aboutCompany = nameHeader

  readonly usersList = nameUsersList

  readonly todosList = nameTodosList

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

const func2 = (usersName: string) => {return usersName}

const nameUsersList: string = 'Пользователи'

const vuzov2 = func2(nameUsersList)

const func3 = (todosName: string) => {return todosName}

const nameTodosList: string = 'Todos'

const vuzov3 = func3(nameTodosList)
