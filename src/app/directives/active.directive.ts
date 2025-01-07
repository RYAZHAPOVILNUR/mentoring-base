import { Directive, ElementRef, HostBinding, HostListener, inject } from "@angular/core";


@Directive({
    selector: '[active]',
    standalone: true
})

export class ActiveDirective {

    color = 'rgba(75, 86, 94, 1)'

    @HostBinding('style.backgroundColor')
    get backgroundColor() {
        return this.color
    }


    @HostListener('mouseenter')
    enter() {
        this.color = 'rgba(240, 186, 78, 1)'
    }

    @HostListener('mouseleave')
    leave() {
        this.color = 'rgba(75, 86, 94, 1)'
    }
    

}