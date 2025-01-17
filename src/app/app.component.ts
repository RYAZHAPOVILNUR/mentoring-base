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

  readonly menunavitem1 = 'Каталог';

  readonly menunavitem2 = 'Стройматериалы';

  readonly menunavitem3 = 'Инструменты';

  readonly menunavitem4 = 'Электрика';

  readonly menunavitem5 = 'Интерьер и одежда';
}

