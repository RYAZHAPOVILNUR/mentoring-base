import { Routes } from '@angular/router';
import { HomehageComponent } from './homepage/homehage.component';
import { UsersListComponent } from './users-list/users-list.component';
import { TodosListComponent } from './todos-list/todos-list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomehageComponent,
  },
  {
    path: 'users',
    component: UsersListComponent,
  },
  {
    path: 'todos',
    component: TodosListComponent,
  },
];
