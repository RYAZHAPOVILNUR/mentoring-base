import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { reduce } from 'rxjs';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,FooterComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}

// const time = new Date().getTime();

// console.log('time:', time);

// if (time === 1737664334945) {
//   console.log('time is correct');
// } else {
//   console.log('ERROR');
// }

// const shopping = (name: string,  item1: string, item2: string, item3: string, price:[number, number, number]) => {
//   return name + ' Пошел в магазин ' + 'Он купил там сначала ' +  item1 + ' Затем, он купил ' + item2 + ' В конце он еще купил  ' + item3 

// }

// const shoppingResult = shopping('Ильнур', 'Хлеб', 'Молоко', 'Сахар', [30, 70, 50 ] );

// console.log(shoppingResult);

// const func1 = (value: number) => console.log('value is;', value);

// func1(123);

// const names = ['Ilnur', 'Farurh', 'Igor', 'Dmitry'];

// function getMenuItem(menuItem: string): string {
//   return menuItem;
// }

// const menuItemName =  getMenuItem('О компании') 
// console.log(menuItemName);

// names.forEach(
//   (name) => {
//     console.log(name);
//   }
// );
 
// names.map(
//   (name) => {
//     console.log(name. toUpperCase());
//     return name.toUpperCase();
//   }
// );



