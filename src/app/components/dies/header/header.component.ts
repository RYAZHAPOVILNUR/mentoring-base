import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { menuItems, headerItems } from './header.config';
import { BgColorDirective } from '../../../directives/bg-color.directive';
import { AuthComponent } from '../../pages/auth-pages/auth/auth.component';

@Component({
  selector: 'app-header',
  imports: [NgIf, NgFor, RouterLink, DatePipe, BgColorDirective, AuthComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public menuItems = menuItems;
  public headerItems = headerItems;
  public isUpperCase = true;
  public isAdminPage = false;
  public isUserPage = false;
  public today: Date = new Date();

  public isAdminPageToggle(authState: boolean) {
    this.isAdminPage = authState;
  }

  public isUserPageToggle(authState: boolean) {
    this.isUserPage = authState;
  }

  public changeMenuText() {
    this.menuItems = this.menuItems.map((item) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }
}
