import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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

const aboutCompanyFn = (Text: string) => Text;
const aboutCompany = aboutCompanyFn ('О компании');

const newPages = [5, 4, 3, 2, 1];

const menuItems = ['Каталог', 'Стройматериалы', 'Иснтрументы', 'Электрика', 'Интерьер и одежда'];

const upperCasemenuItems = menuItems.map (
  (item) => {
    return item.toUpperCase();
  }
)
console.log (upperCasemenuItems)


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';
  IsShowCatalog = true;
  readonly headeritem1 = "Главная";
  readonly headeritem2 = "О компании";
  readonly aboutCompany= aboutCompany;
  readonly headeritem3 = "Каталог";
  readonly headeritemnav1 = "Каталог";
  readonly headeritemnav2 = "Стройматериалы";
  readonly headeritemnav3 = "Иснтрументы";
  readonly headeritemnav4 = "Электрика";
  readonly headeritemnav5 = "Интерьер и одежда";
  menuItems = upperCasemenuItems 
  readonly newPages = newPages;
  isUpperCase = true;

  changeMenuText() {
    this.menuItems = upperCasemenuItems.map (
    item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase
  }
  isShowImg = true;
}
