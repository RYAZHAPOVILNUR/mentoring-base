import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  main = 'Главная';
  aboutUs = 'О компании';
  catalog = 'Каталог';
  buildingMaterials = 'стройматериалы';
  tools = 'Инструменты';
  electrics = "Электрика";
  interior ='Интерьер и одежда';
}
