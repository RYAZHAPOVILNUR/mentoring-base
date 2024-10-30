import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[yellowCart]',
  standalone: true,
})
export class YellowCartDirective {
  backgroundColor = '#4b565e';

  @HostBinding('style.backgroundColor')
  get backgroundColorGetter() {
    return this.backgroundColor;
  }

  @HostListener('mouseenter')
  enter() {
    this.backgroundColor = '#f0ba4e';
  }

  @HostListener('mouseleave')
  leave() {
    this.backgroundColor = '#4b565e';
  }
}
