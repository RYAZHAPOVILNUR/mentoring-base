import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { TodosListComponent } from './todo-list/todos-list.component';
import { authGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent,
  },
  {
    path: 'todos',
    component: TodosListComponent,
  },
  { path: 'admin',
     component: AdminComponent, canActivate: [authGuard]
  },
];
