import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { TodosListComponent } from './todos-list.component/todos-list.component.component';
import { HomeComponent } from './home/home.component';
import { AdminsListComponent } from './admins-list/admins-list.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminCheckingPageComponent } from './admin-checking-page/admin-checking-page.component';
import { UserStatusComponent } from './user-status/user-status.component';

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
