import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent,
    pathMatch: 'full',
  },

  {
    path: 'homepage',
    component: HomepageComponent,
    pathMatch: 'full',
  },

  {
    path: 'todos',
    component: TodosListComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminComponent, canActivate: [authGuard],
     pathMatch: 'full',
  },
];
