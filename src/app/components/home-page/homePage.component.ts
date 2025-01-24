import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";


const menuPagination = ['5', '4', '3', '2', '1'];

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './homePage.component.html',
    styleUrl: './homePage.component.scss',
    imports: [NgFor, NgIf],
})

export class HomePageComponent {
    readonly menuPagination = menuPagination

    isShowMen = true;
}