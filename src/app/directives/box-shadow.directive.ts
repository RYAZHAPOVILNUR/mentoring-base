import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBoxShadow]',
  standalone: true
})
export class BoxShadowDirective {
  private hoverShadow = '';

  @HostBinding('style.boxShadow')
  get boxShadow() {
    return this.hoverShadow
  }

  @HostListener('mouseenter')
  enter() {
    this.hoverShadow = '0px 6px 15px rgba(0, 0, 0, 0.8)'
  }

  @HostListener('mouseleave')
  leave() {
    this.hoverShadow = ''
  }
}
