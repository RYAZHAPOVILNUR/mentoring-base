import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/home/app-header/header.component';
import { HomepageComponent } from './components/home/home.component';
import { FooterComponent } from './components/home/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    NgFor,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
  ],
  templateUrl: 'app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mentoring-first-project';
}
