import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[shadow]',
  standalone: true,
})
export class ShadowDirective {
  boxShadow = 'none';

  @HostBinding('style.boxShadow')
  get boxShadowGetter() {
    return this.boxShadow;
  }

  @HostListener('mouseenter')
  enter() {
    this.boxShadow = '0px 0px 38px 0px rgba(0,0,0,0.3)';
  }

  @HostListener('mouseleave')
  leave() {
    this.boxShadow = 'none';
  }
}
