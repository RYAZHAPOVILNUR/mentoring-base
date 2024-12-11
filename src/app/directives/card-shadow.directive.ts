import { Directive, ElementRef, HostListener, inject } from "@angular/core";

@Directive({
    selector: '[shadow]', 
    standalone: true
})

export class CardShadowDirective {
    private readonly elementRef = inject(ElementRef)

    @HostListener('mouseenter') onMouseEnter() {
        this.cardShadow('22px 22px 32px 10px rgba(80, 34, 44, 1)')
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.cardShadow('')
    }

    private cardShadow(color: string) {
        this.elementRef.nativeElement.style.boxShadow = color
    }
}