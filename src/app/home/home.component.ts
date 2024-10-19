import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";

const newPages = [5, 4, 3, 2, 1]

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [NgIf, NgFor],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    title = 'Главная страница';
    
    isShowBanner = true;
    newPages = newPages;
}