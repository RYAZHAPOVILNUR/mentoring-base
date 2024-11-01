import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TodosListComponent } from './todos-list/todos-list.component';

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
];
