import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[backgroundColor]',
    standalone: true,
})

export class BackgroundKorzinaDirective {
    private bColor = "inherit";

    @HostBinding("style.backgroundColor")
   get backgroundColor(){
    return this.bColor
    }
    @HostListener("mouseenter")
    enter(){
        this.bColor = '#f0ba4e'
    }
    @HostListener("mouseleave")
    leave(){
        this.bColor = 'inherit'
    }
}