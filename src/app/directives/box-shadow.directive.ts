import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[boxShadow]',
  standalone: true,
})
export class BoxShadowDirective {
  boxShadow = 'none';

  @HostBinding('style.boxShadow')
  get boxShadowGetter() {
    return this.boxShadow;
  }

  @HostListener('mouseenter')
  enter() {
    this.boxShadow = '4px 4px 8px 0px rgba(34, 60, 80, 0.2)';
  }

  @HostListener('mouseleave')
  leave() {
    this.boxShadow = 'none';
  }
}
