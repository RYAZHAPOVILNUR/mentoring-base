import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HeaderComponent } from './header/header.component';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';


export const routes: Routes = [
  {path: 'users', component: UsersListComponent}
];


