import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[heart-yellow]',
  standalone: true,
})
export class HeartYellowDirective {
  private defaultColor = '#4B565E';
  private highlightColor = '#f0ba4e';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.highlight(this.defaultColor); 
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(this.defaultColor);
  }

  private highlight(color: string) {
    this.renderer.setAttribute(this.el.nativeElement, 'fill', color);
  }
}