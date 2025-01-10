import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent {
  headerItem1 = 'Главная';
  headerItem3 = 'Каталог';
  menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']
  isUpperCaseState: boolean = false;
  showCatolog: boolean = true;
  aboutCompany: string = '';

  constructor() {
    this.aboutCompany = this.getMenuItem('О компании');
  }

  isShowCatalog() {
    this.showCatolog = !this.showCatolog
  }
  
  getMenuItem(menuItem: string): string {
    return menuItem;
  }

  isUpperCase(){
    this.isUpperCaseState = !this.isUpperCaseState

    this.menuItems = this.menuItems.map(value =>
      this.isUpperCaseState ? value.toLocaleUpperCase() : value.toLocaleLowerCase()
    );
  }
}
