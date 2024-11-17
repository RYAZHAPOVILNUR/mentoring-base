import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appShadow]',
  standalone: true,
})
export class ShadowDirective {
  shadow = ''

  @HostBinding('style.boxShadow') get testing() {
    return this.shadow
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.shadow = '0px 0px 5px 4px rgba(255,0,255,1)'
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.shadow = ''
  }
}
