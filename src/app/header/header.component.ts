import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { YellowDirective } from '../directives/yellow.directive';

const menuItems = [
	'Каталог',
	'Стройматериалы',
	'Инструменты',
	'Электрика',
	'Интерьер и одежда',
];
const upperCaseMenuItems = menuItems.map((item) => {
	return item.toUpperCase();
});
console.log(upperCaseMenuItems);

//домашка задание 1
const func2 = (element: string) => {
	return element;
};
const newElement = func2('О компании');

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
	imports: [NgFor, NgIf, RouterLink, DatePipe, YellowDirective],
	standalone: true,
})
export class HeaderComponent {
	isShowCatalog = true;

	readonly date = new Date();

	readonly headerItem1 = 'Главная';
	readonly aboutCompany = newElement; //дз задание 1
	// readonly headerItem2 = 'О компании';
	readonly headerItem3 = 'Каталог';

	readonly header2Item1 = upperCaseMenuItems[0];

	MenuItems = upperCaseMenuItems;

	// дз задание 4
	isUpperCase = true;

	changeMenuText() {
		this.MenuItems = upperCaseMenuItems.map((item) =>
			this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
		);
		this.isUpperCase = !this.isUpperCase;
	}
}
