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
  
  readonly headerItem1 = 'Главная';
  
  readonly headerItem2 = 'О компании';
  
  readonly headerItem3 = 'Каталог';
  
  readonly secondMenuItem1 = 'Каталог';
  
  readonly secondMenuItem2 = 'Стройматериалы';
  
  readonly secondMenuItem3 = 'Инструменты';
  
  readonly secondMenuItem4 = 'Электрика';
  
  readonly secondMenuItem5 = 'Интерьер и одежда';
  
}

