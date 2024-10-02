import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HomeComponent } from './home/home.component';
import { TodosListComponent } from './todos-list/todos-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'todos', component: TodosListComponent },
];
