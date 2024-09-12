import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";



//домашка задание 3
const newPages = ['1', '2', '3', '4', '5'];

@Component({    
    selector: 'app-main-list',
    templateUrl: './main-list.component.html',
    styleUrl: './main-list.component.scss',
    imports: [ NgIf, NgFor],
    standalone: true
})

export class MainListComponent {
    isShowBanner = true; // дз задание 2
    readonly newPages = newPages.reverse(); //дз задание 3
}