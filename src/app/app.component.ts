import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  readonly headerItem1 = 'Главная';
  readonly headerItem2 = 'О компании';
  readonly headerItem3 = 'Каталог';
  menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']
  isUpperCase = true;

  changeMenuText() {
    this.menuItems = this.menuItems.map(item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase());
    this.isUpperCase = !this.isUpperCase
  }
}
