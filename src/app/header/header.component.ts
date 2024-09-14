// import { HttpClient } from "@angular/common/http";
import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from "@angular/core";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterOutlet, NgIf, NgFor, RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})

export class Header {
    title = 'mentoring-first-project';
    readonly headerItem1: string = 'Главная';
    headerItem2 = aboutCompany;
    readonly headerItem3: string = 'Каталог';
  
    isShowCatalog = true;

    isShowBanner = true;

    menuItems = upperCaseMenuItems;

    readonly newPages = [5, 4, 3, 2, 1];

    isUpperCase = true;
    changeMenuText() {
        this.menuItems = menuItems.map(
        item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
        )
        this.isUpperCase = !this.isUpperCase
    }

    // constructor() {}
    
}

const headerItems = ['Главная', 'О компании', 'Каталог']
const upperCaseHeaderItems = headerItems.map((item) => item.toUpperCase())

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']
const upperCaseMenuItems = menuItems.map((item) => item.toUpperCase())

const headerItem2 = ['О компании'];
const aboutCompany = headerItem2.map((item) => item[0].toUpperCase() + item.slice(1));

