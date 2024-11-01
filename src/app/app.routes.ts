import { Routes } from '@angular/router';
import { UsersListComponent } from './components/home/users-list/users-list.component';
import { TodosListComponent } from './components/home/todos-list.component/todos-list.component.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminCheckingPageComponent } from './components/home/admin-checking-page/admin-checking-page.component';
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
    path: 'admin-checking',
    component: AdminCheckingPageComponent,
    canActivate: [AuthGuardService],
  },
];
