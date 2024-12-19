import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const func = (itemName: string) => {return itemName}

const nameHeader: string = 'О компании'

const vuzov = func(nameHeader)

const func2 = (usersName: string) => {return usersName}

const nameUsersList: string = 'Пользователи'

const vuzov2 = func2(nameUsersList)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'mentoring-first-project';
}
