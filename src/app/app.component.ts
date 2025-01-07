import { DatePipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ActiveDirective } from './directives/active.directive';
import { UserService } from './user.service';

function returnNameMenu(name: string) {
  return name
};

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']

const nameMenu1 = returnNameMenu('О компании');

const newPages = [5, 4, 3, 2, 1]


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, NgIf, NgFor, DatePipe, ActiveDirective],
  
})



export class AppComponent {
  title = 'mentoring-first-project';

  readonly userService = inject(UserService);
  
  isShowCatalog = true;

  isShowPromo = true;

  isUpperCase = false;

  adminStatus = true

  readonly headerItem1 = 'Главная';

  readonly aboutCompany = nameMenu1;

  readonly headerItem3 = 'Каталог';

  readonly headerLowItem1 = 'Каталог';
  
  readonly headerLowItem2 = 'Стройматериалы';

  readonly headerLowItem3 = 'Инструменты';

  readonly headerLowItem4 = 'Электрика';

  readonly headerLowItem5 = 'Интерьер и одежда';

  readonly newPages = newPages;

  readonly dateObj = Date.now();


  menuItems = menuItems

  changeMenuText() {
    this.menuItems = menuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )

    this.isUpperCase = !this.isUpperCase
  };


  logAsAdmin() {
    this.userService.loginAsAdmin();
    this.adminStatus = true
  }

  logAsUser() {
    this.userService.loginAsUser();
    this.adminStatus = false
  }

}
