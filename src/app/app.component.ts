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

  readonly headerItemFirst = 'Главная';
  readonly headerItemSecond = 'О компании';
  readonly headerItemThird = 'Каталог';

  readonly headerTwoItemFirst = 'Каталог';
  readonly headerTwoItemSecond = 'Стройматериалы';
  readonly headerTwiItemThird = 'Инструменты';
  readonly headerTwiItemFourth = 'Электрика';
  readonly headerTwiItemFifth = 'Интерьер и одежда';
}

