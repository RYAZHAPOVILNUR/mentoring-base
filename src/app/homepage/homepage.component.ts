import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

const newPages = [5, 4, 3, 2, 1];

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './homepage.component.html',
  styleUrl: '../app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomepageComponent {
  readonly newPages = newPages;
  
  isShowImage = true;
}
