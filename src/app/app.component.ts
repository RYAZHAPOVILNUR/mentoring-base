import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// let name = 'Elchin';

// if (name==='Elchin') {
//   console.log('name is Elchin')
// }

// const func1 = (value: number) => console.log('value is:', value);

// func1(456);

// const blank = (name:string, surname:string) => console.log('Ваше имя:', name, 'Ваша фамилия:', surname)
// blank('Elchin', 'Husseinov')

// const shopping = (name: string, item1: string, item2: string, item3: string, price: [number, number, number]) => {
//   return name + ' Пошел в магазин' + ' Он купил ' + item1 + ' Затем купил ' + item2 + ' Еще купил ' + item3 + ' Все это обошлось в:' +  (price[0] + price[1] + price[2])
// }

// const shoppingResult = shopping('Эльчин', 'Хлеб', 'Айран', 'Борани', [30, 50, 89]);

// console.log(shoppingResult)

// const names = ['Elchin', 'Sabuhi', 'Javanshir', 'Rovsen'];

// names.forEach(
//   (name) => {
//     console.log(name)
//   }
// )

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']

const upperCaseMenuItems = menuItems.map(
  (item) => {
    return item.toUpperCase();
  }
)

// console.log(upperCaseMenuItems);

const function1 = (menuItem: string) => (menuItem);

const menuItem2 = function1('О компании');

const pages = [1, 2 , 3, 4, 5]

const newPages = pages.reverse()

// console.log(newPages);






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';

  isShowCatalog = true;

  isShowImage = true;

  readonly aboutCompany = menuItem2;

  newPages = newPages

  readonly headerItem1 = 'Главная';

  readonly headerItem3 = 'Каталог';

  readonly header2Item1 = 'Каталог';

  readonly header2Item2 = 'Стройматериалы';

  readonly header2Item3 = 'Инструменты';

  readonly header2Item4 = 'Электрика';

  readonly header2Item5 = 'Интерьер и одежда';

  menuItems = upperCaseMenuItems;

  isUpperCase = true;

changeMenuText() {
  this.menuItems = upperCaseMenuItems.map(
    (item) => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
  )

  this.isUpperCase = !this.isUpperCase
}



}
