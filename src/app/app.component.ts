import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';

  readonly headerItem1 ="Главная"

  readonly headerItem2 ="О компании"

  readonly headerItem3 ="Каталог"

  isShowCatalog = true;

  public aboutCompany = getMenuName("О компании");

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

  showLayout: boolean = true; 

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showLayout = !event.url.includes('/users');
      }
    });
  }
    
}

function getMenuName(name: string): string {
  return name;
}