import { style } from "@angular/animations";
import { Directive, ElementRef, HostBinding, HostListener, inject } from "@angular/core";

@Directive({
  selector: '[yellow]',
  standalone: true
})
export class YellowDirective {
  @HostBinding('style.backgroundColor')
  backgroundColor = ''

  @HostListener('mouseenter') 
  enter() {
    this.backgroundColor = '#F0BA4E'
  }

  @HostListener('mouseleave') 
  leave() {
    this.backgroundColor = ''
  }
 
}


