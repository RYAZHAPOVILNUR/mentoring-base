import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

const newPages = [5, 4, 3, 2, 1];

const func2 = (caller: string) => {
  return caller;
};

const newCaller = func2('О Компании');

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomepageComponent {
  newPages = newPages;

  isShowMan = true;

  headerItem1 = 'Главная';

  aboutCompany = newCaller;

  headerItem3 = 'Каталог';

  boottom__header_one = 'Каталог';

  boottom__header_two = 'Стройматериалы';

  boottom__header_three = 'Инструменты';

  boottom__header_four = 'Электрика';

  boottom__header_five = 'Интерьер и одежда';

  grid__left_action = 'Перейти в каталог';

  wide__pagination_action = 'Посмотреть все товары';
}
