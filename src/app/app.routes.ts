import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuardFn } from './admin.guard';

export const routes: Routes = [
  { path: 'users',
    component: UsersListComponent },
  { path: 'todos',
    component: TodosListComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuardFn],
  },
];