import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from "@angular/core";
import { RouterLink, } from '@angular/router';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
})

export class Footer {
    title = 'mentoring-first-project';

    // isUpperCase = true;
    // changeMenuText() {
    //     this.menuItems = menuItems.map(
    //     item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    //     )
    //     this.isUpperCase = !this.isUpperCase
    // }

    // constructor() {}
    
}

