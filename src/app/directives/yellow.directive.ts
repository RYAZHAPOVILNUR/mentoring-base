import { Directive, ElementRef, HostBinding, HostListener, inject } from "@angular/core";

@Directive({
    selector: '[yellow]',
    standalone: true,
})
export class YellowDirective {
    color = '#4B565E';

    @HostBinding('style.backgroundColor')
    get backgroundColor() {
        return this.color;
    };

    @HostListener('mouseenter')
    enter() {
        this.color = 'yellow';
    }

    @HostListener('mouseleave')
    leave() {
        this.color = '#4B565E';
    }
}