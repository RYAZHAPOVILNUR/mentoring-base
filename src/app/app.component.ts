import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// const time = new Date().getTime();

// console.log('time:' , time)

// if (time === 2727487773) {
//   console.log('time is correct')
// } else {
//    console.log('ERROR')
   
// }

// const shopping =(name: string, item1: string, item2: string, item3: string, price: [ number, number, number]) => {

// return name + ' Пошел  в магазин ' + ' Он там купил сначала ' + item1 + ' Затем он купил ' + item2 + ' В конце он еще купил ' + item3

// }
//  const shoppingResult = shopping('Илнур', 'Хлеб', 'Мясо', 'Молоко', [30, 350, 70]); 

//  console.log(shoppingResult);
 

// const blanc = (name: string, surname: string) =>  console.log('Ваше имя:', name, 'Ваше фамилия', surname)

// blanc('Ilnur', 'Ryazhapov');

// const func1 = (value: number) => console.log('value  is', value );

// func1(13434)

// const names = ['Ilnur', 'Farukh', 'Sveta', 'Dmitry', 'Alexey', 'Evheny']; 

// const upperCaseNames = names.map(
//   (name) => {
  
//      return name.toUpperCase( );
//   }
// )  




const func2 = ( caller: string) => { return caller};

const newCaller = func2('О Компании');





const newPages = [5, 4, 3, 2, 1]



// names.forEach (
//   (name) => {
// console.log('name is', name)

//   }
// )

// console.log(names[1], names[2], names[3]);




@Component({
  selector: 'app-root ',
  standalone: true,  
  imports: [RouterOutlet, NgIf, NgFor ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
[x: string]: any;
  title = 'mentoring-first-project';

  menuItems = ['Каталог', 'Инструменты', 'Электрика', 'Интерьер и одежда'];
  
  isUppercase = true;

  changeMenuText() {
    this.menuItems = this.menuItems.map(
      (item) => this.isUppercase ? item.toLowerCase() : item.toUpperCase()
    )

    this.isUppercase = !this.isUppercase
  }


  newPages = newPages;

  isShowCatalog = true;

  isShowMan = true;

   headerItem1 = 'Главная';

   aboutCompany = newCaller;

   headerItem3 = 'Каталог';

   boottom__header_one = 'Каталог';

   boottom__header_two = 'Стройматериалы';

   boottom__header_three = 'Инструменты';

   boottom__header_four = 'Электрика';

   boottom__header_five = 'Интерьер и одежда';

   grid__left_action = 'Перейти в каталог';

   wide__pagination_action = 'Посмотреть все товары';

   footer__copyright = '© 2000-2021, All rights reserved';


}
