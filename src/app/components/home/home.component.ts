import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

let calcScrollValue = () => {
  let scrollProgress = document.getElementById('progress');
  let progressValue = document.getElementById('progress-value');
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    if (scrollProgress) {
      scrollProgress.style.display = 'grid';
    }
  } else {
    if (scrollProgress) {
      scrollProgress.style.display = 'none';
    }
  }

  scrollProgress?.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });

  if (scrollProgress) {
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  }
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

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
