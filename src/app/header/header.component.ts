import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { menuItems, headerItems } from './header.config';
import { BgColorDirective } from '../directives/bg-color.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, DatePipe, BgColorDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public menuItems = menuItems;
  public headerItems = headerItems;
  public isUpperCase = true;
  public today: Date = new Date();

  changeMenuText() {
    this.menuItems = this.menuItems.map((item) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }
}
