import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

 
const newPages = [5, 4, 3, 2, 1];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  title = 'mentoring-base';

  newPages = newPages;

  isManOnPhoto = true;
}



