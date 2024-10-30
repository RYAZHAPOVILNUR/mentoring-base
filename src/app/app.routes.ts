import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HomeComponent } from './home/home.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { isAdminGuardFn } from './guards/is-admin.guard';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersListComponent },
  {
    path: 'todos',
    component: TodosListComponent,
  },
  {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [isAdminGuardFn],
  },
];
