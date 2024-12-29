import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// const time = new Date().getTime();

// console.log('time:', time);

// if (time === 3423423412432) {
//   console.log('time is correct');
// } else {
//   console.log('ERROR');
// };

// const funcc = (arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => {
//   console.log(arg1)
// };

// funcc(123,231,213123,312312,3213);

// const shopping = (name: string, item1: string, item2: string, item3: string, price: [number, number, number]) => {
//   return name + ' Пошел в магазин.' + ' Он купил там сначала ' + item1 + '. Затем он купил ' + item2 + ' В конце он еще купил ' + item3 + '.'
// };

// const shoppingResult = shopping('Фархат', 'мясо', 'приправу', 'хлеб', [123,123,213]);

// console.log(shoppingResult);

// const blanc = (name: string, surname: string) => console.log('ваше имя:', name, '.Ваша фамилия: ', surname);

// blanc('Farhat','Baimuratov;')

// () => console.log('123');

// const func1 = (value: number) => console.log('value is:', value);

// func1(27031997)

// const name = ['Farhat','Ajar','Agul','Erbolat','Karina','Amirhan','Amina','Nargiza']

// name.forEach(
//   (name) => {
//     console.log('name is:', name)
//   }
// )

// () => console.log('123');

// console.log(menuItems[0]);
// console.log(menuItems[1]);
// console.log(menuItems[2]);
// console.log(menuItems[3]);

// console.log(menuItems[0], menuItems[1], menuItems[2], menuItems[3])

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mentoring-first-project';

  isShowCatalog = true;
  isShowBanner = true;
  isUpperCase = true;

  catalogItems = upperCaseMenuItems

  changeMenuText () {
      this.catalogItems = upperCaseMenuItems.map(
        item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
      )

      this.isUpperCase = !this.isUpperCase
  }

  readonly headerItem1 = headerItem1;
  readonly aboutCompany = company(headerItem2);
  readonly headerItem3 = headerItem3;

  readonly newPage = newPage
}

const headerItem1 = 'Главная';
const headerItem2 = 'О компании';
const headerItem3 = 'Каталог';

const company = (name:string) => name;

const catalogItems = ['Каталог','Стройматериалы','Инструменты','Электрика','Интерьер и одежда'];
const upperCaseMenuItems = catalogItems.map(
  (item) => {
    return item.toUpperCase()
  }
)

const newPage = [5, 4, 3, 2, 1]