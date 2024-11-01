import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headerComponent } from './components/home/app-header/header.component';
import { CurrentUserService } from './services/currentUser.service';

const newPages = [5, 4, 3, 2, 1];

const func2 = (caller: string) => {
  return caller;
};

const newCaller = func2('О Компании');

const callNumber = (phoneNumber: number) => {
  console.log('Calling to the number: ' + phoneNumber + '...');
  console.log('Запись вашего разговора на номер ' + phoneNumber + ' сохранена');
  return 'ВОТ ЗАПИС ВАШЕГО ДИАЛОГА: ssn. jcklmscks... sssjndnvdv dcn...';
};

const callRecording: string = callNumber(770523432);
console.log(callRecording);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, headerComponent],
  templateUrl: 'app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private currentUserService: CurrentUserService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.currentUserService.setCurrentUser()
    }, 2000)
    
  }
  title = 'mentoring-first-project';

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

  footer__copyright = '© 2000-2021, All rights reserved';
}
