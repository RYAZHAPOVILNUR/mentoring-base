import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const mainFn = (text: string) => text;
const textMain = 'Главная'
const aboutCompanyFnFn = (text: string) => text;
const textAboutCompany = 'О компании'
const catalogFn = (text: string) => text;
const textCatalog = 'Каталог'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly main = mainFn(textMain)
  readonly aboutCompany = aboutCompanyFnFn(textAboutCompany)
  readonly catalog = catalogFn(textCatalog)
}
