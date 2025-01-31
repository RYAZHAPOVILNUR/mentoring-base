import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

const menuItems = [
  "Каталог",
  "Стройматериалы",
  "Инструменты",
  "Электрика",
  "Интерьер и одежда",
];

const upperCaseMenuItems = menuItems.map((item) => {
  return item.toUpperCase();
});

const nameItems = (name: string) => {
  return name;
};
const nameAboutItems = nameItems("О компании");

const newPages = [5, 4, 3, 2, 1];
const upperPagesItems = newPages.map((item) => {
  return item;
});

@Component({
  selector: "app-header",
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  title = "mentoring-first-project";

  isShowCatalog = false;
  isShowBackground = true;

  readonly headerItem1 = "Главная";
  readonly headerItem2 = "О компании";
  readonly headerItem3 = "Каталог";

  readonly headerBottomItem1 = "Каталог";
  readonly headerBottomItem2 = "Стройматериалы";
  readonly headerBottomItem3 = "Инструменты";
  readonly headerBottomItem4 = "Электрика";
  readonly headerBottomItem5 = "Интерьер и одежда";

  menuItems = upperCaseMenuItems;
  aboutCompany = nameAboutItems;

  readonly newPages = newPages;

  isUpperCase = true;

  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map((item) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }
}
