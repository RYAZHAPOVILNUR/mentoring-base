import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
import {UsersListComponent} from "../users-list/users-list.component";

@Component({
  imports: [
    RouterOutlet,
    HeaderComponent,
  ],
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
  standalone: true
})
export class LayoutComponent {}
