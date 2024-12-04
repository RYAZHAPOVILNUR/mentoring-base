import {
  Directive,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[red]',
  standalone: true,
})
export class RedDirective {
  color = '#f5f5f5';
  textTransform = 'lowercase';

  @HostBinding('style.backgroundColor')
  get backgroundColor() {
    return this.color;
  }

  @HostBinding('style.textTransform')
  get textTransformGetter() {
    return this.textTransform;
  }

  @HostListener('mouseenter')
  enter() {
    this.color = '#05f0d0';
    this.textTransform = 'uppercase';
  }

  @HostListener('mouseleave')
  leave() {
    this.color = '#f5f5f5';
    this.textTransform = 'lowercase';
    
  }
}
