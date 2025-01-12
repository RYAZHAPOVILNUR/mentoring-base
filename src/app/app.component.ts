import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


const navNamingFunc = (name: string) => {
  return name
}

 const headerValue2 = navNamingFunc("О компании");

 

 //const menuItems = ['Каталог','Стройматериалы', 'Инструменты','Электрика', 'Интерьер и одежда']
 


 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})



export class AppComponent {
  title = 'mentoring-first-project';
  

  

  isUpperCase = true;

  menuItems = ['Каталог','Стройматериалы', 'Инструменты','Электрика', 'Интерьер и одежда']

  upperCaseVal = this.menuItems.map((e) => {
    return e.toUpperCase()
  })
  
  changeMenuText () {
    this.menuItems = this.upperCaseVal.map(
      e => this.isUpperCase ? e.toUpperCase() : e.toLowerCase()
    )

    this.isUpperCase = !this.isUpperCase
  }

  headerItem1 = 'Главная';
  aboutCompany = headerValue2
  headerItem3 = 'Каталог';
  headerItem4 = 'Пользователи';

  secondHeaderItem1 = 'Стройматериалы';
  secondHeaderItem2 = 'Инструменты';
  secondHeaderItem3 = 'Электрика';
  secondHeaderItem4 = 'Интерьер и одежда';


  
}
