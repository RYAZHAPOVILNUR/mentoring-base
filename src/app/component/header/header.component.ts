import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone : true, 
    imports: [NgIf, RouterLink,]
})
export class HeaderComponent {

    isShowCatalog = !true;

  readonly headerItem1 = 'Главная';

  readonly headerItem2 = 'О компании';

  readonly headerItem3 = 'Каталог';

  readonly menunavitem1 = 'Каталог';

  readonly menunavitem2 = 'Стройматериалы';

  readonly menunavitem3 = 'Инструменты';

  readonly menunavitem4 = 'Электрика';

  readonly menunavitem5 = 'Интерьер и одежда';

}