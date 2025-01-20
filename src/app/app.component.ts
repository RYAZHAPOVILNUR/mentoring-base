import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';

  readonly headerItem1 ="Главная"

  readonly headerItem2 ="О компании"

  readonly headerItem3 ="Каталог"

  isShowCatalog=true;

  public aboutCompany = new AboutCompany(getMenuName("О компании"));

  readonly newPagesConst =[5, 4, 3, 2, 1];

  public newPages = this.newPagesConst;

  public isUpperCase: boolean = true;

  public menuItems =['Главная','О компании','Каталог']

  public upperCaseMenuItems = this.menuItems.map((item) => {
    return item.toUpperCase();
  });
  
  changeMenuText() {
    this.menuItems = this.upperCaseMenuItems.map((item: string) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
  
    this.isUpperCase = !this.isUpperCase;
  }


    
}

function getMenuName(name: string): string {
  return name;
}

class AboutCompany{
  public name: string;

  constructor(name:string) {
    this.name = name;
  }
}