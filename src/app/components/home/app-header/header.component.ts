import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { noDashPipe } from '../../../pipes/no-dash.pipe';
import { yellowDirective } from '../../../directives/yellow.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AdminCheckingPageComponent } from '../admin-checking-page/admin-checking-page.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthUserService } from '../../../services/auth-user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  public dialog = inject(MatDialog);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  public logout() {
    this.authUserService.logout();
    this.router.navigate(['']);
    alert('Вы выщли из системы');
  }

  private openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, { duration: 3000 });
  }

  public checkIsAdmin() {
    if (!this.authUserService.isAdmin()) {
      this.openSnackBar('Страница только для Админа🐒', 'Закрыть');
    }
    return false;
  }

  public openDialog() {
    const dialogRef = this.dialog.open(AdminCheckingPageComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'admin') {
        this.authUserService.loginAsAdmin();
        alert('Вы вошли в систему как Админ');
      } else {
        this.authUserService.loginAsUser();
        alert('Вы вошли в систему как Юзер');
      }
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
