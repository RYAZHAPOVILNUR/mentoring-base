import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[yellow]',
    standalone: true,
})
export class YellowDirective {
    color = 'transparent';

    @HostBinding('style.backgroundColor')
    get backgroundColor() {
        return this.color;
    };

    @HostListener('mouseenter')
    enter() {
        this.color = '#f0ba4e';
    }

    @HostListener('mouseleave')
    leave() {
        this.color = 'transparent';
    }
}