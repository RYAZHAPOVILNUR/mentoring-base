import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HeaderComponent } from './header/header.component';
import { TodosListComponent } from './todos-list/todos-list.component';


export const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent,
    pathMatch: 'full'
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'todos',
    component: TodosListComponent
  }  
];


