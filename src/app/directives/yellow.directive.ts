import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appYellow]',
  standalone: true
})
export class YellowDirective {
  private color = '';

  @HostBinding('style.backgroundColor')
  get backgroundColor() {
    return this.color
  }

  @HostListener('mouseenter')
  enter() {
    this.color = '#F0BA4E'
  }

  @HostListener('mouseleave')
  leave() {
    this.color = ''
  }
}
