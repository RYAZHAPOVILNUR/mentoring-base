import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[shadow]',
  standalone: true,
})
export class ShadowDirective {
  boxShadow = '0px 20px 50px 0px #3c3c3b12';

  @HostBinding('style.boxShadow')
  get BoxShadow() {
    return this.boxShadow;
  }

  @HostListener('mouseenter')
  enter() {
    this.boxShadow = '0px 20px 20px 0px #3c3b3b2b';
  }

  @HostListener('mouseleave')
  leave() {
    this.boxShadow = '0px 20px 50px 0px #3c3c3b12';
  }
}
