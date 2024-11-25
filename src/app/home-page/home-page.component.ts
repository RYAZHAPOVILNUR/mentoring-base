import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {NgFor, NgIf} from "@angular/common";

//  3 задание

const newPages: number[] = [5, 4, 3, 2, 1]

// 4 задание

const secondMenuItem = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']

const upperCaseSecondMenuItem = secondMenuItem.map (
  (item) => {
    return item.toUpperCase();
  }
)

console.log(upperCaseSecondMenuItem);


@Component ({
  selector: '',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [RouterOutlet, NgIf, NgFor]
})

export class HomePageComponent {

  isShowBigPicture = true;

  readonly newPages: number[] = newPages;

  secondMenuItem : string[] = upperCaseSecondMenuItem;

  isUpperCase : boolean = true;

  changeMenuText() : void {
    this.secondMenuItem = upperCaseSecondMenuItem.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase
  }

}
