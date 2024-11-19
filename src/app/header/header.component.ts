import { Component, inject } from '@angular/core';
import { DatePipe, NgForOf, NgIf } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";
import { YellowDirective } from "../directives/yellow.directive";
import { MatIcon } from "@angular/material/icon";
import { MatTooltipModule, TooltipPosition } from "@angular/material/tooltip";
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { AuthComponent } from "../auth/auth.component";
import { UserService } from "../services/user.service";

const aboutCompanyFn = (text: string) => text;

const aboutCompany = aboutCompanyFn('О компании');

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];

const upperCaseMenuItems = menuItems.map(
  (item) => {
    return item.toUpperCase()
  }
)
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterOutlet,
    RouterLink,
    DatePipe,
    YellowDirective,
    MatIcon,
    MatTooltipModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isShowCatalog = true;
  readonly headerNavItem1 = 'Главная';
  readonly headerNavItem2 = 'О компании';
  readonly headerNavItem3 = 'Каталог';
  readonly aboutCompany = aboutCompany;
  readonly today: Date = new Date()
  private readonly dialog = inject(MatDialog)
  protected readonly userService = inject(UserService)
  menuItems = upperCaseMenuItems;
  isUpperCase = true;

  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: '300px', height: '300px'
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'admin') {
        this.userService.loginAsAdmin()
      } else if (result === 'user') {
        this.userService.loginAsUser()
      } else return
    });
  }

  public logout() {
    this.userService.logout()
  }
}
