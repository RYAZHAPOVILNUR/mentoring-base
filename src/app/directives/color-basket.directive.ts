import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[colorBasket]',
    standalone: true,
})
export class ColorBasketDirective {
    color_one = '';
    color_two = '';
    text = '';

    @HostBinding('style.backgroundColor')
    get backgroundColor() {
        return this.color_one;
    };

    @HostBinding('style.color')
    get color_text() {
        return this.color_two;
    };

    @HostBinding('style.fontSize')
    get textSize() {
        return this.text;
    };

    @HostListener('mouseenter') //* Наводим мышь на элемент
    enter() {
        this.color_one = '#f0ba4e';
        this.color_two = '#4c565f';
        this.text = '14px'
    };

    @HostListener('mouseleave') //* Уводим мышь от элемента
    leave() {
        this.color_one = '#4e555d';
        this.color_two = 'white';
        this.text = '15px';
    };
}
