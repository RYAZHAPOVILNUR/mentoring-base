import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root ',
  standalone: true,  
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';

  readonly headerItem1 = 'Главная'
  
  readonly headerItem2 = 'О Компании'

  readonly headerItem3 = 'Каталог'

  readonly boottom__header_one = 'Каталог'

  readonly boottom__header_two = 'Стройматериалы'

  readonly boottom__header_three = 'Инструменты'

  readonly boottom__header_four = 'Электрика'

  readonly boottom__header_five = 'Интерьер и одежда'

  readonly grid__left_action = 'Перейти в каталог'

  readonly wide__pagination_action = 'Посмотреть все товары'

  readonly footer__copyright = '© 2000-2021, All rights reserved'


}
