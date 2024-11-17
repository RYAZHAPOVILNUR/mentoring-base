import {Component} from "@angular/core";
import {DatePipe, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {RedDirective} from "../directives/red.directive";


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
    RouterLink,
    DatePipe,
    RedDirective
  ],
  standalone: true
})
export class HeaderComponent {
  readonly main = 'Главная';
  readonly aboutUs = 'О компании';
  readonly catalog = 'Каталог';
  readonly aboutCompany = punctName;

  public isUpperCase = false;
  public menuItems = [
    'Каталог', 'стройматериалы',
    'Инструменты', "Электрика", 'Интерьер и одежда',
  ]

  public today = new Date();

  public changeMenuText() {
    this.menuItems = this.menuItems.map(menuItem => this.isUpperCase ? menuItem.toUpperCase() : menuItem.toLowerCase());
    this.isUpperCase = !this.isUpperCase;
  }
}
