import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headerComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";


const newPages = [5, 4, 3, 2, 1];

const menuItems = ['Каталог', 'Стройматериалы', 'Интрументы', 'Электрика', 'Интерьер и одежда'];

const upperCaseMenuItems = menuItems.map(
  (item) => {
    
    return item.toUpperCase();
    
  }
)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, headerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'mentoring-first-project';
  
  readonly headerItem1 = 'Главная';
  
  readonly headerItem2 = 'О комапании';
  
  readonly headerItem3 = 'Каталог';
  
  readonly topBarItem1 = 'Каталог';
  
  readonly topBarItem2 = 'Стройматериалы';
  
  readonly topBarItem3 = 'Интрументы';
  
  readonly topBarItem4 = 'Электрика';
  
  readonly topBarItem5 = 'Интерьер и одежда';
  
  readonly newPages = newPages;
  
  readonly header2Item1 = upperCaseMenuItems[0];
  
  isShowCatalog = true;
  
  isShowAboutCompanmy = true;
  
  isShowImage = true;
  
  menuItems = upperCaseMenuItems;
  
  isUpperCase = true;
  
  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase() 
    )
    
    this.isUpperCase = !this.isUpperCase
  }
  
}
