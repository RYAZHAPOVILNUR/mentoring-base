import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';



const names = ['vlad', 'sasha', 'ravil'];
const upperCase = names.map (
  (name) => {
    return name.toLocaleUpperCase() }
)
console.log(upperCase);




function aboutCompany(name:string) {
return name;
}
const nameCompany = aboutCompany("О компании");
console.log(nameCompany);





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
  imports: [RouterOutlet, NgIf, NgFor, HeaderComponent, RouterLink, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';

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
