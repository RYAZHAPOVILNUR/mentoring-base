import { NgFor, NgIf } from "@angular/common";
import { Component, Inject, Injectable } from "@angular/core";
import { UsersListComponent } from "../users-list/users-list.component";
import { RouterLink } from "@angular/router";

const names = ['vlad', 'sasha', 'ravil'];
const upperCase = names.map (
  (name) => {
    return name.toLocaleUpperCase() }
)

function aboutCompany(name:string) {
return name;
}
const nameCompany = aboutCompany("О компании");
const newpages = [5,4,3,2,1];

const menuItems : string[] = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']
const upperCaseMenuItems : string[] = menuItems.map(
  (item:string) => {
    return item.toUpperCase();
  }
)

@Component({
  selector: 'app-header',
  standalone : true,
  imports: [NgFor, NgIf, RouterLink ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly headerItem1 = 'Главная';
  readonly headerItem3 = 'Каталог';
  readonly header2Item1 = "Каталог";
  isShouCatalog : boolean= true;
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



