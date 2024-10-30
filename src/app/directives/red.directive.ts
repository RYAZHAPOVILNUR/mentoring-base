import {
  Directive,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[red]',
  standalone: true,
})
export class redDirective {
  color = 'red';
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
    this.textTransform = 'uppercase';
    this.color = 'red';
    console.log('red');
  }

  @HostListener('mouseleave')
  leave() {
    this.textTransform = 'lowercase';
    this.color = 'white';
    console.log('white');
  }
}
