import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive ({
    selector: '[shadow]',
    standalone: true,
})

export class ShadowDirective {
    shadow = 'none'

    @HostBinding('style.boxShadow') 
        get boxShadow() {
           return this.shadow 
        }
    
    @HostListener('mouseenter')
    enter() {
        this.shadow = '5px 5px 10px #0000FF';
    }

    @HostListener('mouseleave')
    leave() {
        this.shadow = 'none'
    }

  
    
}
  