import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headerComponent } from "./header/header.component";
import { HttpClient } from "@angular/common/http";
import {UsersListComponent} from "./users-list/users-list.component"; 

function getMenuName(menuName: string) {
  return menuName; 
}

const newName = getMenuName("О компании"); 

const newPages = [1, 2, 3, 4, 5]; 

const newArray = newPages.reverse(); 


let menuItems = ['Каталог','Стройматериалы','Инструменты','Электрика','Интерьер и одежда']; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, headerComponent, UsersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'mentoring-first-project';

  public readonly aboutCompany = newName; 
  public readonly newPages = newPages;
  public menuItems = menuItems; 

  
  public isUpperCase = true; 
  public isShowImg = false; 

  changeText() {
    this.menuItems = this.menuItems.map(item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    ); 
    this.isUpperCase = !this.isUpperCase; 
  }

  public apiService = inject(HttpClient); 
  users = []; 

  constructor() {
      this.apiService.get('https://jsonplaceholder.typicode.com/users').subscribe(
          (response:any) => {
              this.users = response;
              console.log('USERS: ', this.users) 
          }
      )
  }
}

