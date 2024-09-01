import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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

const func = (aboutCompany:string)=>{return aboutCompany}

const aboutCompany:string='О компании'

const vizov = func(aboutCompany)

// Второе задание

// Третье задание

const newPages = [5,4,3,2,1];

// Четвертое задание
menuItems = ['Каталог', 'Стройматериалы',  'Инструменты', 'Электрика', 'Интерьер и одежда'];
upperCaseMenuItems = this.menuItems;
isUpperCase = true;

changeMenuText() {
  this.menuItems = upperCaseMenuItems.map(
    (item: any) => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
  )
  this.isUpperCase = !this.isUpperCase
}

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
  isShowWorker = true;
  isUpperCase = true;


  readonly newPages = newPages
  readonly aboutCompany= vizov;
  readonly mainheaderitem1 = 'Главная'
  readonly mainheaderitem2 = 'О компании'
  readonly mainheaderitem3 = 'Каталог'
  readonly mainheaderitem4 = '+7 (965) 084-29-29'
  readonly yellowheader1 ='Каталог'
  readonly yellowheader2 ='Стройматериалы'
  readonly yellowheader3 ='Инструменты'
  readonly yellowheader4 ='Электрика'
  readonly yellowheader5 ='Интерьер и одежда'

}

