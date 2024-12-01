import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

const newPages = [5, 4, 3, 2, 1]

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']
const upperCaseMenuItems = menuItems.map(
  (item : string) => {
    return item.toUpperCase();
  }
)
@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, RouterLink, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: ' <a routerLink="/switchNewPage">Админка</a>'

})
export class AppComponent {
  // @Output() BannerDisabled = new EventEmitter()
  
  // disableBanner(){
  //   this.BannerDisabled.emit()
  // }
  isShowBanner = !true; 
 isShowCatalog = !!true ;  
  title = 'mentoring-first-project';

  headeritem1 = 'Главная' ;
  readonly headeritem2 = 'О компании' ;
  readonly headeritem3 = 'Каталог' ;
  readonly header2banner = ''; 
  readonly item = '1';
  // readonly newPages = newPages ; 

  menuItems = menuItems ;
  menuItem = upperCaseMenuItems;  
  isUpperCase = !true;
  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map(
     item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase
 }
}
