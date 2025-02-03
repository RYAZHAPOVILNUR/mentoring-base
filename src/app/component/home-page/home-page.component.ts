import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";

@Component({   
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    standalone : true,
    imports: [NgIf, NgFor,]
})

export class HomePageComponent {

    isShowMen = !false; 

    readonly newPages =[5, 4, 3, 2, 1];

    pages = this.newPages




}
