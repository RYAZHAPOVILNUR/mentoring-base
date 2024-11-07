import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Output } from "@angular/core";
import { RouterLink} from '@angular/router';
import { DashesRemoverPipe } from '../pipes/phonenumber.pipe';
import { YellowCart } from '../directives/cart.directive';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginComponent } from '../login/login.component';
import { UsersService } from '../users.service';

const  aboutCompany = (item: string) => {
  return item 
}
const aboutCompanyResult = aboutCompany('О компании');

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, DatePipe, DashesRemoverPipe, YellowCart, UsersService], 
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent {
  readonly date = new Date();

  phoneNumber: string = '+7 (965) 084-29-29';

  isShowCatalog = true;
  isShowBanner = true;

  MenuItems = ['Каталог', ' Стройматериалы',' Инструменты',' Электроника',' Интерьер и одежда']

  isUpperCase = true;

  changeMenuText () {
    this.MenuItems = this.MenuItems.map(
      (item: string) => this.isUpperCase ? item.toLowerCase(): item.toUpperCase()
      )
      this.isUpperCase = !this.isUpperCase
    }

  title = 'mentoring-first-project';
  readonly HeaderItem1 = 'Главная';
  readonly HeaderItem2 = aboutCompanyResult;
  readonly HeaderItem3 = 'Каталог';

  readonly BarItem1 = this.MenuItems [0];
  readonly BarItem2 = this.MenuItems [1];
  readonly BarItem3 = this.MenuItems [2];
  readonly BarItem4 = this.MenuItems [3];
  readonly BarItem5 = this.MenuItems [4];
  readonly BarLocation = 'Москва';
     
  
  @Output ()
  LoginUser = new EventEmitter ();

  readonly dialog = inject(MatDialog);
  readonly snackBar = inject(MatSnackBar);
  readonly usersService = inject(UsersService);

  public openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'user') {
        this.usersService.loginAsUser();
      } else if (result === 'admin') {
        this.usersService.loginAsAdmin();
      }
    });
  }

  logout() {
    this.usersService.logOut();
  }
}
