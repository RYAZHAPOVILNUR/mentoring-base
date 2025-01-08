import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mentoring-first-project';

  headerItem1 = 'Главная';
  headerItem2 = 'О компании';
  headerItem3 = 'Каталог';

  secondHeaderItem1 = 'Стройматериалы';
  secondHeaderItem2 = 'Инструменты';
  secondHeaderItem3 = 'Электрика';
  secondHeaderItem4 = 'Интерьер и одежда';


  
}
