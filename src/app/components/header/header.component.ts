import { Component, inject, Injectable } from '@angular/core';
import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { HomepageComponent } from '../homepage/homepage.component';
import { RouterLink } from '@angular/router';
import { PhoneNumber } from '../../Pipes/phone-number.pipe';
import { YellowDirective } from '../../directives/yellow.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../../auth/auth.component';
import { UserService } from '../../user.service';
import { AdminComponent } from "../../admin/admin.component";

const menuItems: string[] = [
  'каталог',
  'стройматериалы',
  'инструменты',
  'электрика',
  'интерьер и одежда',
];

const user = {};
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink,
    DatePipe,
    PhoneNumber,
    YellowDirective,
    MatIconModule,
    AsyncPipe
    
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly dialog = inject(MatDialog);
  public readonly userService = inject(UserService);
  number = '+7(965)084-29-29';
  today: Date = new Date();
  title = 'mentoring-first-project';
  isShowCatalog = true;
  readonly headerItem1 = 'Главная';
  readonly aboutCompany = 'О компании';
  readonly headerItem3 = 'Каталог';
  readonly header2Item1: string = upperCaseMenuItems[0];
  isShowMujik = true;
  menuItems: string[] = upperCaseMenuItems;
  isUpperCase: boolean = false;
  changeMenutext(): void {
    this.menuItems = this.menuItems.map((item) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }
  public openDialog(): void {
    const dialogRef = this.dialog.open(AuthComponent, {});
    dialogRef.afterClosed().subscribe((result: string) => {
      console.log(result);
      if (result === 'admin') {
        this.userService.loginAsAdmin();
      } else if (result === 'user') {
        this.userService.loginAsUser();
      } else return undefined;
    });
  }
  public logout() {
    if (confirm('Вы точно хотите выйти?')) {
      console.log('совершили выход');
      return this.userService.logout();
    } else return false;
  }
}

const upperCaseMenuItems: string[] = menuItems.map((item: string) => {
  return item;
});
