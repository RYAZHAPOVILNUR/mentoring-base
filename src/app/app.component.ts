import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'mentoring-first-project';
  readonly HeaderItem1 = 'Главная';
  readonly HeaderItem2 = 'О компании';
  readonly HeaderItem3 = 'Каталог';

  readonly BarItem1 = 'Каталог';
  readonly BarItem2 = 'Стройматериалы';
  readonly BarItem3 = 'Инструменты';
  readonly BarItem4 = 'Электроника';
  readonly BarItem5 = 'Интерьер и одежда';
  readonly BarLocation = 'Москва';
}
