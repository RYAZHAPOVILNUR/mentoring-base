import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[shadow]',
  standalone: true,
})
export class ShadowDirective {
  private defaultShadow = 'none';
  private hoverShadow = '0px 20px 50px 0px #f0ba4e';

  @HostBinding('style.box-shadow')
  get shadowColor() {
    return this.defaultShadow;
  }

  @HostListener('mouseenter')
  enter() {
    this.defaultShadow = this.hoverShadow;
  }

  @HostListener('mouseleave')
  leave() {
    this.defaultShadow = 'none';
  }
}