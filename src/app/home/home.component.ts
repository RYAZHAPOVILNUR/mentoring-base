import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";

const newPages = [5, 4, 3, 2, 1];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [NgIf, NgFor],
})
export class HomeComponent {
  isShowFoto = true;
  newPages = newPages;
}