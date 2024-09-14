import { NgFor, NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";

@Component({
  selector:'app-header',
  templateUrl: 'header-component.html',
  styleUrl: 'header-component.scss',
  standalone: true,
  imports: [NgFor, NgIf],
})

export class HeaderComponent {
  isShowCatalog = true;
  isUppercase = true;

  readonly headerItemFirst = 'Главная';
  aboutCompany = 'O компании';
  headerItemThird = 'Каталог';
  headerTwoItemFirst = 'Каталог';
  headerTwoItemSecond = 'Стройматериалы';
  headerTwoItemThird = 'Инструменты';
  headerTwoItemFourth = 'Электрика';
  headerTwoItemFifth = 'Интерьер и одежда';

  menuItems = ['Каталог', 'Стройматериалы',  'Инструменты', 'Электрика', 'Интерьер и одежда'];
  upperCaseMenuItems = this.menuItems;
  isUpperCase = true;
  changeMenuText() {
    this.menuItems = this.upperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase
  }
}


// const time = new Date().getTime();

// console.log('time:', time)
// if (time ===1724766729748) {
//   console.log('time is correct')
// }
// else {
//   console.log('ERROR')
// }

// const func1 = (value: number) => console.log('Value is;', value);

// func1(456);

// const blanc = (name: string, surname: string) => console.log(' Ваша имя:', name, 'Ваша фамилия:', surname)

// blanc('Ilnur', 'Ryazhapov');

// const shopping =(name: string, item1: string, item2: string, item3: string, price:[number,number,number]) => {
//   console.log(name + ' Пошел в магазин');
//   console.log('Он купил там сначала', item1);
//   console.log('Затем он купил', item2);
//   console.log('В конце он еще купил', item3);
//   console.log('Все это обошлось в:', price[0] + price[1] + price[2], 'рублей')
// }

// shopping('Ильнур','Хлеб','Мясо','Молоко',[30,350,70]);

// const names = ['Ilnur', 'Farukh', 'Sveta', 'Dmitry'];

// names.forEach(
//   (name) =>
//     console.log(name)
// )

// console.log(names[2])г

// Первое задание
