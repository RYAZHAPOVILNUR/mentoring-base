import { NgFor } from "@angular/common";
import { Component } from "@angular/core";

@Component ({
    selector: 'app-header',
    imports: [NgFor,], 
    templateUrl: './header.component.html', 
    styleUrl: './header.component.scss',
    standalone: true,
})

export class headerComponent {

    public isUpperCase = true; 
    public isShowImg = false; 

    public readonly aboutCompany = newName;
    public menuItems = menuItems; 

    changeText() {
        this.menuItems = this.menuItems.map(item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
        ); 
        this.isUpperCase = !this.isUpperCase; 
      }
}; 

const newName = getMenuName("О компании"); 
function getMenuName(menuName: string) {
    return menuName; 
  }

let menuItems = ['Каталог','Стройматериалы','Инструменты','Электрика','Интерьер и одежда']; 
