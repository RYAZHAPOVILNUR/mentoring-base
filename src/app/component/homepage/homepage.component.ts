import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

const newPages = [5, 4, 3, 2, 1];
const upperPagesItems = newPages.map((item) => {
  return item;
});

@Component({
  selector: "app-homepage",
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgFor, NgIf],
  templateUrl: "./homepage.component.html",
  styleUrl: "./homepage.component.scss",
})
export class HomepageComponent {
  isShowCatalog = false;
  isShowBackground = true;

  newPages = newPages;
}
