import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

let name = 'maga';

name = '5';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'mentoring-first-project';
}
