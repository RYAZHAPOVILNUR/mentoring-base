import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { HomePageComponent } from './home/home.component';
import { TodosListComponent } from './todos-list/todos-list.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'users', component: UsersListComponent},
  {path: 'todos', component: TodosListComponent},
];
