import {Component} from "@angular/core";
import {NgFor, NgIf} from "@angular/common";

//  3 задание

const newPages: number[] = [5, 4, 3, 2, 1]


@Component ({
  selector: '',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [ NgIf, NgFor]
})

export class HomePageComponent {

  isShowBigPicture = true;

  readonly newPages: number[] = newPages;

}
