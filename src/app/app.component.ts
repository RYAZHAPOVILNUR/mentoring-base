import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/home/app-header/header.component';
import { HomepageComponent } from './components/home/home.component';
import { FooterComponent } from './components/home/footer/footer.component';

let calcScrollValue = () => {
  let scrollProgress = document.getElementById('progress');
  let progressValue = document.getElementById('progress-value');
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    if (scrollProgress) {
      scrollProgress.style.display = 'grid';
    }
  } else {
    if (scrollProgress) {
      scrollProgress.style.display = 'none';
    }
  }

  scrollProgress?.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });

  if (scrollProgress) {
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  }
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: 'app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mentoring-first-project';
}
