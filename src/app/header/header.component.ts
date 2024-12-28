import { Component } from "@angular/core";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  imports: [NgOptimizedImage],
  standalone: true
})

export class HeaderComponent {}
