import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from "./layout/footer.component";

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


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
