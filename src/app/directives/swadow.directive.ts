import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: "swadow",
    standalone: true,
})
export class SwadowDirective {
    private swadow = ""

    @HostBinding("style.box-shadow")
    get boxSwadow() {
        return this.swadow
    }

    @HostListener("mouseenter")
    enter() {
        this.swadow = '0 0 10px rgba(0, 0, 0, 0.5);'
    }
}