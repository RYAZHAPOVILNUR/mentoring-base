import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// const fruits= ['Apple', 'Banana', 'Pear', 'Avocado', 'Tangerine', 'Orange']
// // console.log (fruits[1],fruits[2],fruits[3],fruits[4])

// const shop = (fruit1:string, fruit2:string, fruit3:string, fruit4:string, fruit5:string,) => {
//   console.log (fruit1)
//   console.log (fruit2)
//   console.log (fruit3)
//   console.log (fruit4)
//   console.log (fruit5)
// }
// shop ('Apple', 'Banana', 'Pear', 'Avocado', 'Tangerine')

// const fruits= ['Apple', 'Banana', 'Pear', 'Avocado', 'Tangerine', 'Orange'];

// fruits.forEach (
//   (fruit) => {
//   console.log ('fruit is:', fruit)
//   }
// )

// const upperCaseName = fruits.map (
//   (fruits) => {
//     return fruits.toUpperCase();
//   }
// )
// console.log (upperCaseName)




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project'; 
}
