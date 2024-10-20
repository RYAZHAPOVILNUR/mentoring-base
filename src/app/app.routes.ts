import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { TodosListComponent } from './todo-list/todos-list.component';



export const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: 'todos',
    component: TodosListComponent
  }
];
