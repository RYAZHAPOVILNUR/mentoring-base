import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgFor, NgIf} from "@angular/common";
import {UsersListComponent} from "./users-list/users-list.component";
import {HeaderComponent} from "./header/header.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, UsersListComponent, HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
