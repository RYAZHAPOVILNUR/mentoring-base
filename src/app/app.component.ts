import { NgFor, NgIf} from '@angular/common';
import { Component } from '@angular/core';
import { consumerAfterComputation } from '@angular/core/primitives/signals';
import { RouterOutlet } from '@angular/router';

// const time = new Date().getTime();

// console.log('time:', time) 

//   if(time === 348754923) {
//     console.log('time is correct')
//   } else {
//     console.log('ERROR')
//   }

// const funccc = (arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => {
//   console.log(arg1)
// }

// funccc(1,2,3,4,5)

// const shopping = (name: string , item1: string , item2: string , item3: string, price: [number, number, number]) => {
//   console.log(name + 'Пошел в магазин');
//   console.log('Он купил там сначала', item1);
//   console.log('Затем он купил', item2);
//   console.log('В конце он еще купил', item3);
//   console.log('Все это обошлось в:', price[0] + price[1], price[2], 'рублей')

//   return name + 'Пошел в магазин' + 'Он купил сначала там' + item1 + 'Затем он купил' + item2 + 'В конце он еще купил' + item3
// }

// const shoppingResult = shopping ('Ильнур', 'Хлеб', 'Мясо', 'Молоко', [30,350,70])

// console.log(shoppingResult)

// const blanc = (name: string, surname:string) => console.log('Ваше имя:', name, 'Ваша фамилия:', surname)

// blanc('Ilnur', 'Ryazhapov')

// () => console.log('123');

// const func1 = (value: number) => console.log('value is:', value);

// func1(1234234);

// const names = ['Ilnur', 'Farukh', 'Sveta', 'Dmitriy', 'Aleksey', 'Evgeniy'];

// names.forEach(
//   (name) => {
//     console.log('name is;', name)
//   })

// console.log(upperCaseNames)

const menuItems : string[] = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']

const upperCaseMenuItems : string[] = menuItems.map(
  (item : string): string => {
    return item.toUpperCase();
  }
)

// console.log(upperCaseMenuItems)

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

// console.log(names[1]), (names[2]), (names[3])

const newPages: number[] = [5,4,3,2,1]


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'mentoring-first-project';

  isShowCatalog = false;
  isShowImg : boolean = true;

  readonly headerItem1 = 'Главная';

  readonly headerItem2 = 'О компании';

  readonly headerItem3 = 'Каталог';

  readonly header2Item1 = upperCaseMenuItems[0];

  readonly header2Item2 = 'Cтройматериалы';
  
  readonly header2Item3 = 'Инструменты';

  readonly header2Item4 = 'Электрика';

  readonly header2Item5 = 'Интерьер и одежда';

  readonly newPages: number[] = newPages;

  menuItems : string[] = upperCaseMenuItems

  isUpperCase = true;

  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )

    this.isUpperCase = !this.isUpperCase
  }
 }