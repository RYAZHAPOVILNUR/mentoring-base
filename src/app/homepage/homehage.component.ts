import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

const myPages = [1, 2, 3, 4, 5].reverse()

@Component({
  selector: 'app-homehage',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './homehage.component.html',
  styleUrl: './homehage.component.scss'
})
export class HomehageComponent {
  isShowImage = true;

  readonly newPages = myPages;
}
