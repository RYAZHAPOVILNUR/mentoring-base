import { Routes } from '@angular/router';
import { UsersListComponent } from "./users-list/users-list.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {TodosListComponent} from "./todo-list/todos-list.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'users',
    component: UsersListComponent,
  },
  {
    path: 'todos',
    component: TodosListComponent,
  }
];
