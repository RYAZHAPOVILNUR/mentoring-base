import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// const blanc = (name : string)

const names = ['vlad', 'sasha', 'ravil'];
const upperCase = names.map (
  (name) => {
    return name.toLocaleUpperCase() }
)
console.log(upperCase);


//Home-work-1

function aboutCompany(name:string) {
return name;
}
const nameCompany = aboutCompany("О компании");
console.log(nameCompany);

//Home-work-2

//Home-work-3

const newpages = [5,4,3,2,1];

const menuItems : string[] = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']
const upperCaseMenuItems : string[] = menuItems.map(
  (item:string) => {
    return item.toUpperCase();
  }
)
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project7';

 isShouCatalog : boolean= true;
 isShouBunner : boolean = true;
   readonly headerItem1 = 'Главная';
   readonly headerItem3 = 'Каталог';
   readonly header2Item1 = "Каталог";
   readonly aboutCompany = nameCompany;
   readonly newPages :number[] = newpages;
   menuItems : string[] = upperCaseMenuItems;
   isUpperCase : boolean = true;
   changeTextMenu() {
    this.menuItems = upperCaseMenuItems.map(
      item  => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase
   }


}
