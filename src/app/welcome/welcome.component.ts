import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NgFor, NgIf } from "@angular/common";

const paginationNumbers = [1, 2, 3, 4, 5];
const paginationNumberReverse = paginationNumbers.reverse();

@Component({
  selector: "welcome",
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './welcome.component.html', // исправлено: templateUrl вместо template
  styleUrls: ["./welcome.component.scss"],
  standalone: true
})
export class WelcomeComponent {
  isBigImage: boolean = true;
  newPages: number[] = paginationNumberReverse;
}
