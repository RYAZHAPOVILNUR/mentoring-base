import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { ContentComponent } from './content/content.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
  },
  {
    path: 'users',
    component: UsersListComponent,
  },
  {
    path: 'todos',
    component: TodoListComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard]
  }
];
