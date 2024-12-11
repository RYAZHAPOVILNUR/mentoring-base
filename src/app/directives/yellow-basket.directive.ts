import { Directive, ElementRef, HostListener, inject } from "@angular/core";

@Directive({
    selector: '[yellow]',
    standalone: true
})

export class YellowBasketDirective {
    private readonly elementRef = inject(ElementRef)

    constructor() {}

    @HostListener('mouseenter') onMouseEnter() {
        this.colorBasket('yellow')
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.colorBasket('')
    }

    private colorBasket(color: string) {
        this.elementRef.nativeElement.style.backgroundColor = color
    }
}