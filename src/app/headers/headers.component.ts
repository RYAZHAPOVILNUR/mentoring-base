import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadersComponent {
  readonly headerItem1 = 'Главная';
  readonly headerItem2 = 'О компании';
  readonly headerItem3 = 'Каталог';
  menuItems = [
    'Каталог',
    'Стройматериалы',
    'Инструменты',
    'Электрика',
    'Интерьер и одежда',
  ];
  isUpperCase = true;

  changeMenuText() {
    this.menuItems = this.menuItems.map((item) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }
}
