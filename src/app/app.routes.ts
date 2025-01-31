import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent,
  },

  {
    path:'header',
    component: HeaderComponent,
  },

  {
    path:'',
    component: HomeComponent
  }

];
