import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from "@angular/core";


const newPages = [5, 4, 3, 2, 1]

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgIf, NgFor]
})

export class MainComponent {

    readonly newPages = newPages;
    
    isShowPromo = true;
}