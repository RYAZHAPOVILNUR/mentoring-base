import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const func = (itemName: string) => {return itemName}

const nameHeader: string = 'О компании'

const vuzov = func(nameHeader)

const func2 = (usersName: string) => {return usersName}

const nameUsersList: string = 'Пользователи'

const vuzov2 = func2(nameUsersList)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
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

  readonly usersList = nameUsersList
  //header2
  // readonly header2Item1 = 'Каталог';

  // readonly header2Item2 = 'Стройматериалы';

  // readonly header2Item3 = 'Инструменты';

  // readonly header2Item4 = 'Электрика';

  // readonly header2Item5 = 'Интерьер и одежда';

  // readonly header2Item1 = upperCaseMenuItems[0];

  readonly aboutCompany = nameHeader

  isShowImg = true

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
