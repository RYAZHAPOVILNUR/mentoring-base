import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

const newPages =  [5, 4, 3, 2, 1];

@Component({
  selector: 'app-body-c',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './body-c.component.html',
  styleUrl: './body-c.component.scss'
})
export class BodyCComponent {
  showImage = true
  newPages = newPages
}
