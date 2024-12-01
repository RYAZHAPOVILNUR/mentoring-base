import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// const name = 'Muaz';

// if (name === 'Muaz') {
//  console.log('name is Muaz')
// } else {
//  console.log('error')
// }

// const shopping = (name: string, item1: string, item2: string, item3: string, price: [number, number, number]) => {
  // return name + 'Пошёл в магазин' + 'Он купил сначала' + item1 + 'Затем он купил' + item2 + 'В конце он ещё купил' + item3
// }

// const shoppingResult = shopping ('Муаз', 'Хлеб', 'Мясо', 'Молоко', [30, 350, 70])

// console.log(shoppingResult);



// const blanc1 = (name: string, surname: string) => console.log('Ваше имя:', name, 'Ваша фамилия:', surname);

// blanc1 ('Muaz', 'Musaev');


// const func1 = (value: number) => console.log('value is:', value);

// func1(123);

// const name = ('О компании');

// const aboutCompany = name {
  // (name) >
  // return name.headeritem2()
// }

//  ('О компании');


// const names = ['Muaz', 'Khabib', 'Rasul', 'Shamil']

// names.forEach(
  // (name) => {
    // console.log('name is:', name)
  // }
// )

// const upperCaseNames = names.map (
  // (name) => {
  // return name.toUpperCase();
  // }
// )

// console.log(upperCaseNames);

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

//task#1
const func = (itemName: string) => {return itemName}

const nameHeader: string = 'О компании'

const vuzov = func(nameHeader)
//

//task#3
const newPages:number[] = [5, 4, 3, 2, 1]
//

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'mentoring-first-project';

  isShowCatalog = true;

  //header1
  readonly headerItem1 = 'Главная';

  readonly headerItem2 = 'О';

  readonly headerItem3 = 'Каталог';
  //

  //header2
  // readonly header2Item1 = 'Каталог';

  // readonly header2Item2 = 'Стройматериалы';

  // readonly header2Item3 = 'Инструменты';

  // readonly header2Item4 = 'Электрика';

  // readonly header2Item5 = 'Интерьер и одежда';

  readonly header2Item1 = upperCaseMenuItems[0];

  //task#1
  readonly aboutCompany = nameHeader
  //

  //task#2
  isShowImg = true
  //

  //task#3
  readonly newPages:number[] = newPages;
  //

  //task#4
  menuItems = upperCaseMenuItems;

  isUpperCase = true;

  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )

  this.isUpperCase = !this.isUpperCase
  }
  //
}
//task#4
// const headerItems = ['Главная','О компании', 'Каталог']
// const upperCaseHeaderItems = headerItems.map((item) => item.toUpperCase())

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']

const upperCaseMenuItems = menuItems.map(
  (item) => {
    return item.toUpperCase();
  }
)

// const headerItem2 = ['О компании'];
// const aboutCompany = headerItem2.map((item) => item[0].toUpperCase() + item.slice(1));
//

