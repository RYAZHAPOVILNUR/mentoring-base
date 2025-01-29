import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [ NgFor, NgIf, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    isShowCatalog = true;
    menyItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];
      isUpperCase = true;
    readonly headerItem1 = 'Главная';
    readonly aboutCompany = 'О компании';
    readonly headerItem3 = 'Каталог';
    changeMenyText() {
        this.menyItems = this.menyItems.map(
            item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
        );
        this.isUpperCase = !this.isUpperCase;
    }
}



 




