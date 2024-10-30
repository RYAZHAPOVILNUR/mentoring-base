import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



function returnString(arg: string): string {
  return arg;
}
const punctName = returnString("О компании");

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly main = 'Главная';
  readonly aboutUs = 'О компании';
  readonly catalog = 'Каталог';
  readonly buildingMaterials = 'стройматериалы';
  readonly tools = 'Инструменты';
  readonly electrics = "Электрика";
  readonly interior ='Интерьер и одежда';

  readonly aboutCompany = punctName;

}
