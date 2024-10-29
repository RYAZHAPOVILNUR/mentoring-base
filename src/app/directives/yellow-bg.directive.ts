import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
} from '@angular/core';

@Directive({
  selector: '[yellow-bg]',
  standalone: true,
})
export class YellowBgDirective {
  color = 'transparent';

  @HostBinding('style.backgroundColor')
  get backgroundColor() {
    return this.color;
  }

  @HostListener('mouseenter')
  enter() {
    this.color = '#f0ba4e';
  }

  @HostListener('mouseleave')
  leave() {
    this.color = 'transparent';
  }
}
