import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive ({
  selector: '[shadow]',
  standalone: true
})

export class ShadowForUser {
  color = 'white'

  @HostBinding ('style.backgroundColor') 
  get backgroundColor() {
    return this.color;
  }

  @HostListener ('mouseenter') 
    enter () {
      this.color = '#3C3C3B12';
    }
  
    @HostListener ('mouseleave') 
    leave () {
      this.color = 'white';
    }
}