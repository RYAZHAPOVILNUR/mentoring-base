import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

const aboutCompani = (text: string) => console.log(text);

aboutCompani('О компании');

const names = ['Ilnur', 'Farukh', 'Sveta', 'Dmitry']


const newPages = [5, 4, 3, 2, 1]


const upperCaseNames = names.map (
  (name) => {
    console.log(name.toUpperCase());
    return name.toUpperCase();
  }
)


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'mentoring-base';
  isShowImg = true;

  readonly newPages = newPages;

}
