import { Routes } from '@angular/router';
import { UserListComponent } from './components/pages/user-list/user-list.component';
import { MainComponent } from './components/pages/main/main.component';
import { TodosListComponent } from './components/pages/todos-list/todos-list.component';
import { AdminComponent } from './components/pages/auth-pages/admin/admin.component';
import { UserComponent } from './components/pages/auth-pages/user/user.component';
import { isLoggedAdminGuard } from './services/guards/is-logged-admin.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
  },
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [isLoggedAdminGuard],
  },
  {
    path: 'todos',
    component: TodosListComponent,
    canActivate: [isLoggedAdminGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [isLoggedAdminGuard],
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [isLoggedAdminGuard],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
