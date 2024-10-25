import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

// const name = 'rustam'
// if (name === 'rustam') {
//    console.log ('name is RUSTAM')
// } else {
//   console.log('FFFUUCK')
// }
// const names = ['rustam', 'bender', 'max', 'dima'];

// names.forEach(
// (name) => {
//   console.log(name)
// }
// )

// const upperCaseNames = names.map(
//   (name) => {
//     console.log(name.toUpperCase());
//     return name.toUpperCase();
//   }
// )





// console.log(names)

// const funcl = (value: number) => console.log('value is:', value );
// funcl(2);


// const shopping = (name: string, item1: string, item2: string, item3: string) => {
//   console.log(name + ' пошел в магазин');
//   console.log('он купил там', item1);
//   console.log('затем он купил', item2);
//   console.log('в конце он еще купил', item3)
// }
// shopping('бендер', 'пыль', 'ганжу', 'шпекс')
   

const newPages = [5, 4, 3, 2, 1]

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']
const upperCaseMenuItems = menuItems.map(
  (item : string) => {
    return item.toUpperCase();
  }
)

// const user = {
//   name: 'Bender' ,
//   surname: 'White' ,
//   height: '180' ,
//   weight: '80' 
// }




@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, RouterLink],
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
