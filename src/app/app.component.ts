import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { YellowDirective } from './directives/yellow-basket.directive';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from './auth/auth.component';
import { UserService } from './user.service';
import { upperCaseItems, lowerCaseItems, menuNameItem } from './constance';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, RouterLink, DatePipe, YellowDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mentoring-first-project';

  isShowMainPicture = true;
  isShowMain = true;
  isUpperCase = false;

  upperCaseItems = upperCaseItems;
  lowerCaseItems = lowerCaseItems;

  MyDate = Date.now();

  readonly header_item_1 = 'Главная';
  readonly aboutCompany = menuNameItem('О компании');
  readonly header_item_3 = 'Каталог';

  readonly dialog = inject(MatDialog);
  userService = inject(UserService);
  router = inject(Router);

  logOut() {
    this.userService.logOut();
    this.router.navigate(['']);
  }

  openDialogAuth(): void {
    const dialogRef = this.dialog.open(AuthComponent, {});

    dialogRef.afterClosed().subscribe((res: string) => {
      if (res === 'user') {
        this.userService.loginAsUser();
      } else if (res === 'admin') {
        this.userService.loginAsAdmin();
      } else {
        return;
      }
    });
  }
}
