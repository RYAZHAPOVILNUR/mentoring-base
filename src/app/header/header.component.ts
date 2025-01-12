import { NgFor} from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent {
  headerItem1 = 'Главная';
  menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']
  isUpperCaseState: boolean = false;

  isUpperCase(){
    this.isUpperCaseState = !this.isUpperCaseState

    this.menuItems = this.menuItems.map(value =>
      this.isUpperCaseState ? value.toLocaleUpperCase() : value.toLocaleLowerCase()
    );
  }
}
