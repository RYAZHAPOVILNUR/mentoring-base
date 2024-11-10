import { Directive, ElementRef, HostBinding, HostListener, inject } from "@angular/core";

@Directive({
    selector: '[shadow]',
    standalone: true
})
export class ShadowDirective{
    shadow = '0px 20px 50px 0px rgba(18, 17, 39, 0.08)';

    @HostBinding('style.box-shadow')
    get shadowColor() {
        return this.shadow;
    }

    @HostListener('mouseenter')
    enter() {
        this.shadow = '0px 20px 50px 0px red';
        console.log('red')
    }

    @HostListener('mouseleave')
    leave() {
        this.shadow = '0px 20px 50px 0px blue';
        console.log('blue')
    }

    // constructor() {
    //     this.shadowColor
    // }
    }
