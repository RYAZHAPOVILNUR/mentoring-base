import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[bgColor]',
  standalone: true,
})
export class BgColorDirective {
  public bgColor = '';

  @HostBinding('style.backgroundColor')
  get getBgColor() {
    return this.bgColor;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = '#f0ba4e';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = '';
  }
}
