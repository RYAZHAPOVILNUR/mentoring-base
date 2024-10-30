import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RouterLink } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserService } from './services/users-services/user.service';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';


const newPages = [5, 4, 3, 2, 1];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    NgFor,
    RouterLink,
    HeaderComponent,
    UsersListComponent,
    LoginComponent,
    AdminComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
 constructor(private userService: UserService) { }
  isShowSadMan = true;
  newPages = newPages;

  isAdmin(): boolean {
   return this.userService.isAdmin();
 }
}