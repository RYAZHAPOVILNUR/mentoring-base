import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

const newPages:number[] = [5, 4, 3, 2, 1]

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  // isShowCatalog = true

  isShowImg = true

  readonly newPages: number[] = newPages
}
