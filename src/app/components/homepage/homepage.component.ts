import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

const newPages: number[] = [5, 4, 3, 2, 1];

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  isShowImg: boolean = true;

  readonly newPages: number[] = newPages;

}

