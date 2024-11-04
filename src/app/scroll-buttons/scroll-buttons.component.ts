import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-buttons',
  standalone: true,
  imports: [NgIf],
  templateUrl: './scroll-buttons.component.html',
  styleUrl: './scroll-buttons.component.scss',
})
export class ScrollButtonsComponent {
  isButtonVisible: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.scrollY;
    const windowHeight = window.innerHeight;

    this.isButtonVisible = yOffset > windowHeight / 2;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}