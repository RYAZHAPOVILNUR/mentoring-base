import { Routes } from '@angular/router';
import { UsersListComponent } from './components/home/users-list/users-list.component';
import { TodosListComponent } from './components/home/todos-list.component/todos-list.component.component';
import { HomeComponent } from './components/home/home.component';
import { AdminsListComponent } from './components/home/admins-list/admins-list.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminCheckingPageComponent } from './components/home/admin-checking-page/admin-checking-page.component';
import { UserStatusComponent } from './components/home/user-status/user-status.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'users',
    component: UsersListComponent,
  },

  {
    path: 'todos',
    component: TodosListComponent,
  },

  {
    path: 'admins',
    component: AdminsListComponent,
    canActivate: [AuthGuardService],
  },

  {
    path: 'admin-checking',
    component: AdminCheckingPageComponent,
  },

  {
    path: 'user-status',
    component: UserStatusComponent,
  },
];
