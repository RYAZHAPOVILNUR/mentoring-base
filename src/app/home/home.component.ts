import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

const newPages = [5, 4, 3, 2, 1];

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [NgIf, NgFor],
})
export class Home {
  isShowPhoto = true;
  newPages = newPages;
}
