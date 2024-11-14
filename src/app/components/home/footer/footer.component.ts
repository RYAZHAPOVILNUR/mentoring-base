import {Component} from '@angular/core';

const func2 = (caller: string) => {
  return caller;
};

const newCaller = func2('О Компании');

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  headerItem1 = 'Главная';

  aboutCompany = newCaller;

  headerItem3 = 'Каталог';

  footer__copyright = '© 2000-2021, All rights reserved';
}
