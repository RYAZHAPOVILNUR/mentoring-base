import { NgFor, NgIf } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";

const menuItems = ['Каталог', 'Стройматериалы', 'Интрументы', 'Электрика', 'Интерьер и одежда'];

const upperCaseMenuItems = menuItems.map(
	(item) => {
		return item.toUpperCase();
	}
)

@Component ({
	selector: 'app-header',
	standalone: true,
	imports: [NgIf, NgFor, RouterLink],
	templateUrl: 'header.component.html',
	styleUrl: '../app.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class headerComponent {
	readonly headerItem1 = 'Главная';
	
	readonly headerItem2 = 'О комапании';
	
	readonly headerItem3 = 'Каталог';
	
	readonly topBarItem1 = 'Каталог';
	
	readonly topBarItem2 = 'Стройматериалы';
	
	readonly topBarItem3 = 'Интрументы';
	
	readonly topBarItem4 = 'Электрика';
	
	readonly topBarItem5 = 'Интерьер и одежда';
	
	readonly header2Item1 = upperCaseMenuItems[0];
	
	isShowCatalog = true;
	
	isShowAboutCompanmy = true;
	
	isShowImage = true;
	
	menuItems = upperCaseMenuItems;
	
	isUpperCase = true;
	
	changeMenuText() {
		this.menuItems = upperCaseMenuItems.map(
			item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase() 
		)
		
		this.isUpperCase = !this.isUpperCase
	}
}