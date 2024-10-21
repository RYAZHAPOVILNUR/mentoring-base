import { Component } from "@angular/core";
import { NgFor, NgIf } from "@angular/common";

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];
const upperCaseMenuItems = menuItems.map(item => item.toUpperCase());

const setMenuName = (name: string) => name;
const aboutCompany = setMenuName('О компании')

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [NgIf, NgFor],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    isShowCatalog = true;
    isUpperCase = true;
    menuItems = menuItems;
    upperCaseMenuItems = upperCaseMenuItems;

    changeMenuText() {
        this.menuItems = this.upperCaseMenuItems.map(
            (item) => {
                return this.isUpperCase ? item.toUpperCase() : item.toLowerCase()
            }
        )

        this.isUpperCase = !this.isUpperCase;
    }

    readonly headerItem1 = 'Главная';
    readonly aboutCompany = aboutCompany;
    readonly headerItem3 = 'Каталог';

    readonly header2Item1 = 'Каталог';
}