import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive ({
    selector: '[shadow]',
    standalone: true,
})
export class ShadowDirective {
    boxShadow = '0px 20px 50px 0px #12112714';

    @HostBinding('style.box-shadow')
    get shadowColor() {
        return this.boxShadow;
    };

    @HostListener('mouseenter')
    enter() {
        this.boxShadow = '0px 20px 50px 0px red';
    }

    @HostListener('mouseleave')
    leave() {
        this.boxShadow = '0px 20px 50px 0px #12112714';
    }
}