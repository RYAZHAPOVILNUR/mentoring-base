import {Component} from "@angular/core";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";


function returnString(arg: string): string {
  return arg;
}
const punctName = returnString("О компании");

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  imports: [
    NgForOf,
    RouterLink
  ],
  standalone: true
})
export class HeaderComponent {
  readonly main = 'Главная';
  readonly aboutUs = 'О компании';
  readonly catalog = 'Каталог';
  readonly aboutCompany = punctName;
  isUpperCase = false;
  menuItems = [
    'Каталог', 'стройматериалы',
    'Инструменты',  "Электрика", 'Интерьер и одежда',
  ]

  changeMenuText() {
    this.menuItems = this.menuItems.map(menuItem => this.isUpperCase ? menuItem.toUpperCase() : menuItem.toLowerCase());
    this.isUpperCase = !this.isUpperCase;
  }

}
