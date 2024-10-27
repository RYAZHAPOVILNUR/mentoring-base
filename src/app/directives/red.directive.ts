import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[red]',
    standalone: true,
})
export class RedDirective {
    color = 'red';
    text = 'lowerCase';
    
    @HostBinding('style.backgroundColor')
    get backgroundColor() {
        return this.color;
    };
    
    @HostBinding('style.textTransform')
    get textTransform() {
        return this.text;
    };
    
    @HostListener('mouseenter') //* Наводим мышь на элемент
    enter() {
        this.color = 'red';
        this.text = 'uppercase';
        console.log('red');
    };
    
    @HostListener('mouseleave') //* Уводим мышь от элемента
    leave() {
        this.color = 'white';
        this.text = 'lowercase';
        console.log('white');
    };
}
