import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

const newPages:number[] = [5, 4, 3, 2, 1]

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  readonly newPages:number[] = newPages;

  isShowImg = true
}
