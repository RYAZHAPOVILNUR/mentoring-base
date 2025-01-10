import { NgFor, NgIf, } from "@angular/common";
import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { RouterModule } from "@angular/router";

const headerItem1 = "Главная";
const headerItem2 = "О компании";
const headerItem3 = "Каталог";

const company = (name:string) => name;

@Component({
  selector: "app-header",
  standalone: true,
  imports: [NgFor, NgIf, RouterModule ],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  isUpperCase = true;
  isShowCatalog = true;

  readonly headerItem1 = headerItem1;
  readonly aboutCompany = company(headerItem2);
  readonly headerItem3 = headerItem3;

  catalogItems = upperCaseMenuItems

  changeMenuText () {
      this.catalogItems = upperCaseMenuItems.map(
        item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
      )

      this.isUpperCase = !this.isUpperCase
  }

}

const catalogItems = ["Каталог","Стройматериалы","Инструменты","Электрика","Интерьер и одежда"];
const upperCaseMenuItems = catalogItems.map(
  (item) => {
    return item.toUpperCase()
  }
)
