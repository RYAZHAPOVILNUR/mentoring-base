import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { noDashPipe } from '../../../pipes/no-dash.pipe';
import { yellowDirective } from '../../../directives/yellow.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AdminCheckingPageComponent } from '../admin-checking-page/admin-checking-page.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthUserService } from '../../../services/auth-user.service';

const func2 = (caller: string) => {
  return caller;
};

const newCaller = func2('О Компании');

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.scss',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    RouterLink,
    DatePipe,
    yellowDirective,
    noDashPipe,
    MatButtonModule,
    MatTooltipModule,
    RouterLinkActive,
  ],
})
export class HeaderComponent {
  private authUserService = inject(AuthUserService);
  constructor(public dialog: MatDialog) {}

  private loginAsAdmin(): void {
    this.authUserService.loginAsAdmin();
    alert('Вы вошли как администратор');
  }

  private loginAsUser(): void {
    this.authUserService.loginAsUser();
    alert('Вы вошли как ползователь');
  }

  public logout(): void {
    this.authUserService.logout();
    alert('Вы выщли из системы');
  }

  private isAdmin(): boolean {
    return this.authUserService.getIsAdmin();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(AdminCheckingPageComponent);
    dialogRef.componentInstance.submitClicked.subscribe(result => {
    console.log('Got the data!', result);
  });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  

  isShowMan = true;

  headerItem1 = 'Главная';

  headerItem3 = 'Каталог';

  aboutCompany = newCaller;

  isShowCatalog = true;

  menuItems = ['Каталог', 'Инструменты', 'Электрика', 'Интерьер и одежда'];

  isUppercase = true;

  changeMenuText() {
    this.menuItems = this.menuItems.map((item) =>
      this.isUppercase ? item.toLowerCase() : item.toUpperCase()
    );

    this.isUppercase = !this.isUppercase;
  }

  currentDate: Date = new Date();

  phone = '+7 (965) 084-29-29';

}
