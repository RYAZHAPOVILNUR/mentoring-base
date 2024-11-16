import {Component} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {NgForOf, NgIf} from "@angular/common";
import {UsersListComponent} from "../users-list/users-list.component";

const newPages = [5, 4, 3, 2, 1];

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, NgForOf, NgIf, UsersListComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  isShow = false;
  newPages = newPages
}
