import { Directive, ElementRef, HostBinding, HostListener, inject } from "@angular/core";

@Directive({
  selector: '[yellow]',
  standalone: true,
})
export class YellowDirective {
  color = '#f5f5f5';
  @HostBinding('style.color')
  get backgroundColor() {
    return this.color;
  }
  @HostBinding('style.color')
  get textTransformGetter() {
    return this.color
  }

  @HostListener('mouseenter')
  enter() {
    this.color = 'yellow ';
  }
  @HostListener('mouseleave')
  leave() {
    this.color = '#f5f5f5'
  }
}