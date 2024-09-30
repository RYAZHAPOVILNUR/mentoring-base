import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

const pages = [1, 2, 3, 4, 5];

const newPages = pages.reverse();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: 'home.component.scss',
  standalone: true,
  imports: [NgFor, NgIf],
})
export class HomeComponent {
  isShowImage = true;

  newPages = newPages;
}
