import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[shadow]',
  standalone: true,
})
export class ShadowDirective {
  boxShadow = 'none';

  @HostBinding('style.boxShadow')
  get BoxShadow() {
    return this.boxShadow;
  }

  @HostListener('mouseenter')
  enter() {
    this.boxShadow = 
    '8px 5px 5px 2px rgba(0, 0, 255, .2), -8px -5px 5px 2px rgba(255, 0, 255, .2)'
  }

  @HostListener('mouseleave')
  leave() {
    this.boxShadow = 'none';
  }
}
