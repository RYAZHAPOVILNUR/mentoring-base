import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

const func = (date: string) => { return date }

const itemName: string = 'О компании'

const vzv = func(itemName)

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];

const upperCaseMenuItems = menuItems.map((item) => {
    return item.toLowerCase();
});

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: true,
    imports: [NgIf, RouterLink, NgFor,] ,
})
export class HeaderComponent {

    readonly headerItem1 = 'Главная';
    readonly headerItem2 = 'О компании';
    readonly headerItem3 = 'Каталог';
    readonly aboutCompany = vzv;

    isShowCatalog = !false;

    menuItems = upperCaseMenuItems;

    isUpperCase = false;

    changeMenuText() {
        this.menuItems = upperCaseMenuItems.map((item) =>
            this.isUpperCase ? item.toLowerCase() : item.toUpperCase()

        );
        this.isUpperCase = !this.isUpperCase
    }

};
