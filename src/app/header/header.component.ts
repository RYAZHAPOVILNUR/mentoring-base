import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, inject} from '@angular/core';
import { RouterLink } from '@angular/router';
import { YellowDirective } from '../directiv/yellow.directiv';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';
import { UserService } from '../user.service';


const aboutCompanyFn = (Text: string) => Text;
const aboutCompany = aboutCompanyFn ('О компании');
const menuItems = ['Каталог', 'Стройматериалы', 'Иснтрументы', 'Электрика', 'Интерьер и одежда'];
const upperCasemenuItems = menuItems.map (
  (item) => {
    return item.toUpperCase();
  }
)
console.log (upperCasemenuItems)


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, DatePipe, YellowDirective, AsyncPipe, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent {
  private readonly dialog = inject(MatDialog);
  public readonly userServise = inject(UserService)
  IsShowCatalog = true;
  readonly headerItem1 = "Главная";
  readonly aboutCompany = aboutCompany;
  readonly headerItem3 = "Каталог";
  menuItems = upperCasemenuItems; 
  isUpperCase = true;
  today: Date = new Date();
  
  

  changeMenuText() {
    this.menuItems = upperCasemenuItems.map (
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AuthComponent,{
      width: '400px',
      height: '200px' 
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'admin') {
        this.userServise.loginAsAdmin()
      }else if (result === 'user'){
        this.userServise.loginAsUser()
      }else result: undefined;
    });
  }
  logout() {
    if (confirm ('Вы точно хотите выйти?')) {
      console.log('Вы совершили logout');
      return this.userServise.logout();
    } else {
      return false;
    }
  }
}
