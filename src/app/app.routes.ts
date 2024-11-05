import { Routes } from '@angular/router';
import { UsersListComponent } from './components/home/users-list/users-list.component';
import { TodosListComponent } from './components/home/todos-list.component/todos-list.component.component';
import { HomepageComponent } from './components/home/home.component';
import { AdminGuardFn } from './services/admin-guard.service';
import { AdminComponent } from './components/home/admin/admin.component';
export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
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
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuardFn],
  },
];
