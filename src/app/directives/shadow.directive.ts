import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[shadowHighlight]',
    standalone: true,
})
export class ShadowHighlightDirective {
    shadowCards = '';

    @HostBinding('style.boxShadow')
    get boxShadow() {
        return this.shadowCards;
    };
    
    @HostListener('mouseenter')
    enter() {
        this.shadowCards = '10px 10px 8px rgba(0, 0, 0, 0.4';
    };
    
    @HostListener('mouseleave')
    leave() {
        this.shadowCards = '';
    };
}