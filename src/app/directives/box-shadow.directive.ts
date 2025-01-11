import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[boxShadow]',
  standalone: true,
})
export class BoxShadowDirective {
  public boxShadow = '';

  @HostBinding('style.box-shadow')
  get getBgColor() {
    return this.boxShadow;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.boxShadow = '';
  }
}
