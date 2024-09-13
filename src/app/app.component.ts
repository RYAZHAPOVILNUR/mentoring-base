<<<<<<< Updated upstream
=======
import { NgFor, NgIf} from '@angular/common';
>>>>>>> Stashed changes
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< Updated upstream
  imports: [RouterOutlet],
=======
  imports: [RouterOutlet, NgIf,NgFor,],
>>>>>>> Stashed changes
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
<<<<<<< Updated upstream
=======

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

//  readonly upperCaseMenuItems = this.MenuItems.map (
//    (item: string) => {
//      return item.toUpperCase();
//    }
//   )

isUpperCase = true;

  changeMenuText () {
    this.MenuItems = this.MenuItems.map(
      (item: string) => this.isUpperCase ? item.toLowerCase(): item.toUpperCase()
      )
      this.isUpperCase = !this.isUpperCase
    }

>>>>>>> Stashed changes
  title = 'mentoring-first-project';
}
