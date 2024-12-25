import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

const newPages = [5, 4, 3, 2, 1];

@Component({
  selector: 'content-root',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './content.component.html',
  styleUrl: '../app.component.scss',
})
export class ContentComponent {
  title = 'mentoring-first-project';

  newPages = newPages;

  isShowMainPicture = true;
}
