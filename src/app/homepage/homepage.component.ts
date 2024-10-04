import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

const myPages = [1, 2, 3, 4, 5].reverse()

@Component({
  selector: 'app-homehage',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  isShowImage = true;

  readonly newPages = myPages;
}
