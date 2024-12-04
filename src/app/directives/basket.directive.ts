import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[basket]',
  standalone: true,
})
export class BasketDirective {
  color = '#f5f5f5';

  @HostBinding('style.color')
  get Color() {
    return this.color;
  }

  @HostListener('mouseenter')
  enter() {
    this.color = 'yellow';
  }

  @HostListener('mouseleave')
  leave() {
    this.color = '#f5f5f5';
  }
}
