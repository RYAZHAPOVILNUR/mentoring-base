import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Output, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { redDirective } from './my directives/red.directive';
import { yellowDirective } from './my directives/yellow.directive';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSnackBar} from '@angular/material/snack-bar'
import { UserService } from './user.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

const newPages = [5, 4, 3, 2, 1]

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']
const upperCaseMenuItems = menuItems.map(
  (item : string) => {
    return item.toUpperCase();
  }
)
@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, RouterLink, MatButtonModule, yellowDirective, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: ' <a routerLink="/switchNewPage">Админка</a>'

})
export class AppComponent {
  // @Output() BannerDisabled = new EventEmitter()
  
  // disableBanner(){
  //   this.BannerDisabled.emit()
  // }
  private readonly SnackBar = inject(MatSnackBar)
  private readonly userService = inject(UserService)
  private readonly dialog = inject(MatDialog)
Date = new Date()
  isShowBanner = !true; 
 isShowCatalog = !!true ;  
  title = 'mentoring-first-project';

  headeritem1 = 'Главная' ;
  readonly headeritem2 = 'О компании' ;
  readonly headeritem3 = 'Каталог' ;
  readonly header2banner = ''; 
  readonly item = '1';
  // readonly newPages = newPages ; 

  menuItems = menuItems ;
  menuItem = upperCaseMenuItems;  
  isUpperCase = !true;
  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map(
     item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase
 }
 private openSnackBar(message: string, action: string) {
  this.SnackBar.open(message, action, {duration: 3000}) }
 public checkIsAdmin() {
  if (this.userService.isAdmin()) {
    this.openSnackBar('only for admin', '')
  }
 }
  public logout() {
    this.userService.logout()
  }
  public openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      height: '400px'
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'admin') {
        this.userService.loginAsAdmin()
      } else if (result === 'user') {
        this.userService.loginAsUser()
      } else return undefined
    })
  }
}
