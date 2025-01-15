import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

const newPages = [5, 4, 3, 2, 1];
newPages.reverse();

const user = {
  name:'ilnur',
  surname: 'razhapov',
  height: 185,
  weight: 100
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'mentoring-first-project';

  image = false;
  readonly aboutCompany = 'О компании';

  newPages = newPages;
  btn = true;

  isUpperCase = true;
}
