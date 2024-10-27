import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive ({
  selector: '[yellow]',
  standalone: true
})

export class YellowCart {
  color = '#4B565E'

  @HostBinding ('style.backgroundColor') 
  get backgroundColor() {
    return this.color;
  }

  @HostListener ('mouseenter') 
    enter () {
      this.color = '#F0BA4E';
    }
  
    @HostListener ('mouseleave') 
    leave () {
      this.color = '#4B565E';
    }
}