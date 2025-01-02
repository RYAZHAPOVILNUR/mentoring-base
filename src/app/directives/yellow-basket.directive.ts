import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[yellow]',
  standalone: true,
})
export class YellowDirective {
  colorBg = '#4b565e';

  @HostBinding('style.backgroundColor')
  get backgroundColor() {
    return this.colorBg;
  }

  @HostListener('mouseenter')
  enter() {
    this.colorBg = 'yellow';
  }

  @HostListener('mouseleave')
  leave() {
    this.colorBg = '#4b565e';
  }
}
