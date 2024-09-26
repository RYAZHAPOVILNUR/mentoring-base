import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

// const time = new Date().getTime();

// console.log('time:', time);

// if (time === 1724787638268) {
//   console.log('time is correct');
// }
// else {
//   console.log('ERROR');
// }

// const func1 = (value: number) => console.log('value is:', value);

// func1(456);

// const blanc = (name: string, surname: string) => console.log('Ваше имя:', name, 'Ваша фамилия:', surname);
// blanc('Ilnur', 'Ryazhapov');

// const shopping = (name: string, item1: string, item2: string, item3: string, price: [number, number, number]) => {
//   // console.log(name + ' пошел в магазин');
//   // console.log('Он купил там сначала', item1);
//   // console.log('Затем он купил', item2);
//   // console.log('А в конце он еще купил', item3);
//   // console.log('За все заплатил:', price [0] + price [1] + price [2] , 'рублей');
//   return name + ' пошел в магазин' + ' Он купил там сначала '+ item1 + ' Затем он купил '+ item2 + ' А в конце он еще купил '+ item3
// }

// const shoppingResult = shopping('Ильнур', 'хлеб', 'молоко', 'мясо', [30, 70, 350]);
// console.log(shoppingResult);

// const names = ['Ilnur', 'Farukh', 'Sveta', 'Dmitry', 'Alexey', 'Evgeny'];

// const upperCaseNames = names.map(
//   (name) => {
//     // console.log(name.toUpperCase());
//     return name.toUpperCase();
//   }
// )
// console.log(upperCaseNames);

// names.forEach(
//   (name) => {
//     console.log('name is:', name)
//   }
// )

// console.log(names [2]);

// const user = {
//   name: 'Ilnur',
//   surnsme: 'Ryazhapov',
//   height: 185,
//   wegiht: 100
// }

// // user.name = 'Petr'

// console.log (user)

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NgIf, NgFor, RouterLink, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'mentoring-first-project';
}
