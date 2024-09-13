import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  readonly  aboutCompany = (item: string) => {
    return item 
  }
  readonly aboutCompanyResult = this.aboutCompany('О компании');

  isShowCatalog = true;
  isShowBanner = true;

  readonly  newPages = [5,4,3,2,1];
  readonly pagesNew = this.newPages.map(
  (item) => {
    return item;
  }
  )

  MenuItems = ['Каталог', ' Стройматериалы',' Инструменты',' Электроника',' Интерьер и одежда']

 readonly upperCaseMenuItems = this.MenuItems.map (
   (item: string) => {
     return item.toUpperCase();
   }
  )

isUpperCase = true;

  changeMenuText () {
    this.MenuItems = this.MenuItems.map(
      (item: string) => this.isUpperCase ? item.toLowerCase(): item.toUpperCase()
      )
      this.isUpperCase = !this.isUpperCase
    }

  title = 'mentoring-first-project';
  readonly HeaderItem1 = 'Главная';
  readonly HeaderItem2 = this.aboutCompanyResult;
  readonly HeaderItem3 = 'Каталог';

  readonly BarItem1 = this.MenuItems [0];
  readonly BarItem2 = this.MenuItems [1];
  readonly BarItem3 = this.MenuItems [2];
  readonly BarItem4 = this.MenuItems [3];
  readonly BarItem5 = this.MenuItems [4];
  readonly BarLocation = 'Москва';

}

const name = 'Nika'
if (name === 'Nika') {
  console.log ('Name is Nika') 
} else {
  console.log ('ERROR')
}
