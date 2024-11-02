import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-homePage',
  standalone: true, 
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: './homePage.component.html',
 styleUrl: './homePage.component.scss'
})
export class homePageComponent {
}