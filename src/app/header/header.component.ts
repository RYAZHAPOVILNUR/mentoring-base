import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  readonly headerItem1 = 'Главная'

  readonly aboutCompany = aboutCompany

  readonly headerItem3 = 'Каталог'

  readonly headerItem4 = 'Пользователи'

  readonly headerItem5 = 'Todos'

  readonly headerItemYellow1 = upperCaseMenu

  menuUpperNames = upperCaseMenu

  isUpperCase = true

  changeMenuText() {
    this.menuUpperNames = upperCaseMenu.map(
      item => this.isUpperCase ? item.toLocaleLowerCase() : item.toUpperCase()
    )

    this.isUpperCase = !this.isUpperCase
  }
}

const aboutCompanyFunc = (value: string) => value

const aboutCompany = aboutCompanyFunc ('О компании')

const menuUpperNames = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']

const upperCaseMenu = menuUpperNames.map(
  (name: string) => {
    return name.toUpperCase();
  }
)