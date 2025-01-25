import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
const newPages = [5, 4, 3, 2, 1];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  readonly newPages = newPages;
  ImageBody = true;
}
