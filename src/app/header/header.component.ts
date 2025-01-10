import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { menuItems, headerItems } from './header.config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public menuItems = menuItems;
  public headerItems = headerItems;
  isUpperCase = true;

  changeMenuText() {
    this.menuItems = this.menuItems.map((item) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }
}
