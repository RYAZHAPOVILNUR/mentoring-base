import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';

  isShowImage = true;

  readonly isShowCatalog = true;

  readonly headerItem1 = 'Главная'

  readonly aboutCompany = aboutCompany

  readonly headerItem3 = 'Каталог'

  readonly header2Item1 = upperCaseMenu

 menuUpperNames = upperCaseMenu

  readonly newPages = newPages

  isUpperCase = true

  changeMenuText() {
    this.menuUpperNames = upperCaseMenu.map(
      item => this.isUpperCase ? item.toLocaleLowerCase() : item.toUpperCase()
    )

    this.isUpperCase = !this.isUpperCase
  }
}

const newPages = [ 5, 4, 3, 2, 1];

const aboutCompanyFunc = (value: string) => value

const aboutCompany = aboutCompanyFunc ('О компании')

const menuUpperNames = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']

const upperCaseMenu = menuUpperNames.map(
  (name: string) => {
    return name.toUpperCase();
  }
)