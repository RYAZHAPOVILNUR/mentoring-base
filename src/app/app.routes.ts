import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { Home } from './home/home.component';

export const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: '', component: Home },
];
